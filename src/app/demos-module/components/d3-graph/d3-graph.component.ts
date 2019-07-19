import { Component, Input, OnInit, OnChanges, ElementRef, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';
import { Selection, select } from 'd3-selection';
import { transition } from 'd3-transition';
import { schemePaired } from 'd3-scale-chromatic';

// https://keathmilligan.net/create-a-reusable-chart-component-with-angular-and-d3-js/

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-d3-graph',
    styleUrls: ['./d3-graph.component.scss'],
    template: ''
})
export class D3GraphComponent implements OnInit, OnChanges {
    /* ToDo Ideas (d3.v3.js)
        Leverage d3.geo.path().area()
        Maps.  See http://app.pluralsight.com/training/player?course=d3js-data-visualization-fundamentals
        Word Cloud
        Stacked Bars
        Multi-line
    */
    isReady = false;
    _tooltip: any;

    @Input() data: Array<any> = null;
    @Input() height = 300;
    @Input() labels = 'all';
    @Input() warningLevel = Infinity;
    @Input() width = 350;
    @Input() type = 'bar';
    @Input() xKey = 'x'; // The key within the data object that contains the x values
    @Input() yKey = 'y'; // The key within the data object that contains the y values
    @Input() xType = 'number'; // Valid options are number or date

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        // Only start drawing the graphs after all inputs have been initially set and the OnInit has completed
        this.isReady = true;
        // Create a tooltip that will remain hidden until hover
        this._tooltip = d3.select('body')
            .append('div')
            .attr('class', 'd3-tooltip')
            .style('opacity', 0)
            .style('pointer-events', 'none')
            .style('position', 'absolute');
        // Set initial values from querystring if they existing
        this.draw();
    }

    ngOnChanges(): void {
        if (this.isReady) {
            this.draw();
        }
    }

    createBarGraph(): void {
        const _this = this;
        const padding = 2;
        // Find best fit for data to fill height
        const yMultiplier = _this.height / d3.max(_this.data, (d: any) => d[_this.yKey]);
        // Find best fit for data to fill width
        const xMultiplier = _this.width / _this.data.length;
        const svg = d3.select(_this.el.nativeElement)
            .append('svg')
            .attr('width', _this.width)
            .attr('height', _this.height);
        // Bars
        svg.selectAll('rect').data(_this.data).enter().append('rect')
            .attr('x', (d: any, i: number) => i * xMultiplier)
            .attr('y', (d: any) => _this.height - (d[_this.yKey] * yMultiplier))
            .attr('width', xMultiplier - padding)
            .attr('height', (d: any) => d[_this.yKey] * yMultiplier)
            .attr('class', (d: any) => _this.classPicker(d[_this.yKey], _this.warningLevel))
            // Dynamic Lables
            .on('mouseover', function(d: any) {
                // Show tooltip at mouse pointer
                _this._tooltip.transition().duration(500).style('opacity', 0.9);
                let tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
                tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
                _this._tooltip.html(tip)
                        .style('left', (d3.event.pageX) + 'px')
                        .style('top', (d3.event.pageY - 28) + 'px');
                // Add y value to top of bar
                svg.append('text')
                    .text(d[_this.yKey])
                    .attr('x', parseFloat(d3.select(this).attr('x')) + parseFloat(d3.select(this).attr('width')) / 2)
                    .attr('y', parseFloat(d3.select(this).attr('y')) + 14) // Text 14px below the bar top, or roughly up 1em
                    .attr('text-anchor', 'middle')
                    .attr('id', 'hoverLabel_' + d[_this.yKey]);
            })
            .on('mouseout', (d: any) => {
                // Hide tooltip
                _this._tooltip.transition().duration(500).style('opacity', 0);
                // Remove y value to top of bar
                d3.select('#hoverLabel_' + d[_this.yKey]).remove();
            });
        // Static Lables
        svg.selectAll('text').data(_this.data).enter().append('text')
            .text((d: any) => _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true))
            .attr('x', (d: any, i: number) => i * xMultiplier + (xMultiplier - padding) / 2)
            .attr('y', (d: any) => _this.height - (d[_this.yKey] * yMultiplier) + 14) // Text 14px below the bar top, or roughly up 1em
            .attr('text-anchor', 'middle');
   }

    createLineChart(): void {
        // Array must be sorted by x before passing to this function or the line will jump all over the place
        const _this = this;
        const padding = 26;
        const isDate: boolean = (this.xType === 'date');
        const xScale = this.scale(_this.xKey, [padding + 5, _this.width - 10], true);
        const yScale = this.scale(_this.yKey, [_this.height - padding, 10], false);
        const xAxisGen = d3.axisBottom(xScale);
        if (isDate) {
            xAxisGen.tickFormat(d3.timeFormat('%b'));
        }
        const yAxisGen = d3.axisLeft(yScale);
        const lineFunction = d3.line()
            // Make sure all date strings are date objects before putting them into the path
            .x((d: any) => xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]))
            .y((d: any) => yScale(d[_this.yKey]))
            .curve(d3.curveLinear);
        const svg = d3.select(_this.el.nativeElement)
            .append('svg')
            .attr('width', _this.width)
            .attr('height', _this.height);
        // Line
        svg.append('path')
        .attr('class', 'd3-path')
        .attr('d', lineFunction(_this.data))
        .attr('fill', 'none');
        // Dots
        svg.selectAll('circle').data(_this.data).enter().append('circle')
            .attr('cx', (d: any) => xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]))
            .attr('cy', (d: any) => yScale(d[_this.yKey]))
            .attr('r', 3)
            .attr('class', (d: any) => _this.classPicker(d[_this.yKey], _this.warningLevel))
            // Dynamic Lables
            .on('mouseover', (d: any) => {
                // Show tooltip at mouse pointer
                _this._tooltip.transition().duration(500).style('opacity', 0.9);
                let tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
                tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
                _this._tooltip.html(tip)
                        .style('left', (d3.event.pageX) + 'px')
                        .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', (d: any) => {
                // Hide tooltip
                _this._tooltip.transition().duration(500).style('opacity', 0);
            });
        // Lables
        svg.selectAll('text').data(_this.data).enter().append('text')
            .text((d: any) => _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true))
            .attr('x', (d: any) => xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]))
            .attr('y', (d: any) => yScale(d[_this.yKey]))
            .attr('text-anchor', 'start')
            .attr('class', (d: any) => _this.classPicker(d[_this.yKey], _this.warningLevel));
        svg.append('g').call(xAxisGen)
            .attr('class', 'd3-axis')
            .attr('transform', 'translate(0, ' + (_this.height - padding) + ')');
        svg.append('g').call(yAxisGen)
            .attr('class', 'd3-axis')
            .attr('transform', 'translate(' + padding + ', 0)');
    }

    createPieChart(): void {
        const _this = this;
        const r = _this.width / 2;
        const vis = d3.select(_this.el.nativeElement)
            .append('svg:svg') // Create the SVG element inside nativeElement
            .data([_this.data]) // Associate our data with the document
            .attr('width', r * 2) // Set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr('height', r * 2)
            .append('svg:g') // Make a group to hold our pie chart
            .attr('transform', 'translate(' + r + ',' + r + ')'); // Move the center of the pie chart from 0, 0 to radius, radius
        const pie = d3.pie() // Create arc data for us given a list of values
            .value((d: any) => d[_this.yKey]); // Tell it how to access the value of each element in our data array
        const arcs = vis.selectAll('g.slice') // Selects all <g> elements with class slice (there aren't any yet)
            .data(pie) // Associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
            .enter() // This will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append('svg:g') // Create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
            .attr('class', 'slice'); // Allow us to style things in the slices (like text)
        const color = d3.scaleOrdinal(schemePaired); // Builtin range of colors
        const arc = d3.arc().outerRadius(r).innerRadius(0); // Declare an arc generator function that will create <path> elements for us using arc data
        arcs.append('svg:path')
            .attr('fill', (d: any, i: any) => color(i)) // Set the color for each slice to be chosen from the color function defined above
            .attr('d', (d: any) => arc(d)) // This creates the actual SVG path using the associated data (pie) with the arc drawing function
            // Dynamic Lables
            .on('mouseover', (d: any, i: number) => {
                // Show tooltip at mouse pointer
                _this._tooltip.transition().duration(500).style('opacity', 0.9);
                let tip = '<strong>' + _this.xKey + ':</strong> ' + _this.data[i][_this.xKey] + '<br/>';
                tip += '<strong>' + _this.yKey + ':</strong> ' + _this.data[i][_this.yKey] + '<br/>';
                _this._tooltip.html(tip)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', (d: any) => {
                // Hide tooltip
                _this._tooltip.transition().duration(500).style('opacity', 0);
            });
        // Labels
        const isDate: boolean = (this.xType === 'date');
        const timeFormat = d3.timeFormat('%b');
        arcs.append('svg:text') // Add a label to each slice
            .attr('class', 'd3-axis')
            .attr('transform', (d: any) => { // Set the label's origin to the center of the arc
                    // Make sure to set these before calling arc.centroid
                    d.innerRadius = 0;
                    d.outerRadius = r;
                    const labelR = r * 0.9;
                    const c = arc.centroid(d);
                    const  x = c[0];
                    const  y = c[1]; // Gives us a pair of coordinates like [50, 50]
                    // Pythagorean theorem for hypotenuse
                    const h = Math.sqrt(x * x + y * y);
                    return 'translate(' + (x / h * labelR) +  ',' + (y / h * labelR) +  ')';
            })
            .attr('text-anchor', 'middle') // Center the text on it's origin
            .text( (d: any, i: number) => {
                const max = d3.max(_this.data, (d2: any) => d2[_this.yKey]);
                const min = d3.min(_this.data, (d2: any) => d2[_this.yKey]);
                const xValue = _this.data[i][_this.xKey];
                const yValue = _this.data[i][_this.yKey];
                if ((_this.labels !== 'none') && ((_this.labels === 'minmax' && (yValue === max || yValue === min)) || (_this.labels === 'all')))  {
                    return isDate ? timeFormat(new Date(xValue)) : xValue;
                }
            });
    }

    createScatterPlot(): void {
        // Unlike LineChart, this array does not need to be sorted by x
        const _this = this;
        const padding = 26;
        const isDate: boolean = (this.xType === 'date');
        const xScale = this.scale(_this.xKey, [padding + 5, _this.width - 10], true);
        const yScale = this.scale(_this.yKey, [_this.height - padding, 10], false);
        const xAxisGen = d3.axisBottom(xScale);
        if (isDate) {
            xAxisGen.tickFormat(d3.timeFormat('%b'));
        }
        const yAxisGen = d3.axisLeft(yScale);
        const svg = d3.select(_this.el.nativeElement)
            .append('svg')
            .attr('width', _this.width)
            .attr('height', _this.height);
        // Dots
        svg.selectAll('circle').data(_this.data).enter().append('circle')
            .attr('cx', (d: any) => xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]))
            .attr('cy', (d: any) => yScale(d[_this.yKey]))
            .attr('r', 5)
            .attr('class', (d: any) => _this.classPicker(d[_this.yKey], _this.warningLevel))
            // Dynamic Lables
            .on('mouseover', (d: any) => {
                // Show tooltip at mouse pointer
                _this._tooltip.transition().duration(500).style('opacity', 0.9);
                let tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
                tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
                _this._tooltip.html(tip)
                        .style('left', (d3.event.pageX) + 'px')
                        .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', (d: any) => {
                // Hide tooltip
                _this._tooltip.transition().duration(500).style('opacity', 0);
            });
        // Static Lables
        svg.selectAll('text').data(_this.data).enter().append('text')
            .text((d: any) => _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true))
            .attr('x', (d: any) => xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]))
            .attr('y', (d: any) => yScale(d[_this.yKey]))
            .attr('text-anchor', 'start')
            .attr('class', (d: any) => _this.classPicker(d[_this.yKey], _this.warningLevel));
        svg.append('g').call(xAxisGen)
            .attr('class', 'd3-axis')
            .attr('transform', 'translate(0, ' + (_this.height - padding) + ')');
        svg.append('g').call(yAxisGen)
            .attr('class', 'd3-axis')
            .attr('transform', 'translate(' + padding + ', 0)');
    }

    classPicker(value: number, warningLevel: number): string {
        // Returns a warning class that can be styles through CSS to make data above the warningLevel stand out
        if (value >= warningLevel) {
            return 'd3-warning';
        } else {
            return 'd3-default';
        }
    }

    draw(): void {
        // Remove any existing SVG content before re-drawing
        d3.select(this.el.nativeElement).selectAll('*').remove();
        switch (this.type) {
            case 'bar':
                this.createBarGraph();
                break;
            case 'line':
                this.createLineChart();
                break;
            case 'pie':
                this.createPieChart();
                break;
            case 'scatter':
                this.createScatterPlot();
                break;
        }
    }

    scale(key: string, range: Array<number>, useMin= false): any {
        // Scale to use to best fit data into viewable space
        // Size refers to the x or y pixel size
        const _this = this;
        let min: any;
        let max: any;
        let scale: any;
        if (this.xType === 'date') {
            min = new Date(d3.min(_this.data, (d: any) => d[key]));
            max = new Date(d3.max(_this.data, (d: any) => d[key]));
            scale = d3.scaleTime();
        } else {
            if (useMin) {
                min = d3.min(_this.data, (d: any) => d[key]);
            } else {
                min = 0;
            }
            max = d3.max(_this.data, (d: any) => d[key]);
            scale = d3.scaleLinear();
        }
        return scale.domain([min, max]).range(range);
    }

    showLabels(key: string, value: any, type: string, useMin= true): any {
        // Allows for either showing no labels, just the min and max labels, or all labels
        const _this = this;
        const max = d3.max(_this.data, (d: any) => d[key]);
        let min = 0;
        if (useMin) {
            min = d3.min(_this.data, (d: any) => d[key]);
        }
        if ((type !== 'none') && ((type === 'minmax' && (value === max || value === min)) || (type === 'all')))  {
            return value;
        }
    }
}
