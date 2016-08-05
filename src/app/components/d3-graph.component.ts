import { Component, Input, OnInit, OnChanges, ElementRef, ViewEncapsulation } from '@angular/core';

//Must be inlcuded in index.html
declare var d3: any;
declare var _:any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'd3-graph',
    styleUrls: ['app/components/d3-graph.component.css'],
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
    isReady: boolean = false;
    _tooltip: any;

    @Input() data: Array<any> = null;
    @Input() height: number = 300;
    @Input() labels: string = "all";
    @Input() warningLevel: number = Infinity;
    @Input() width: number = 350;
    @Input() type: string = "bar";
    @Input() xKey: string = "x"; //The key within the data object that contains the x values
    @Input() yKey: string = "y"; //The key within the data object that contains the y values
    @Input() xType: string = "number"; //Valid options are number or date

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        //Only start drawing the graphs after all inputs have been initially set and the OnInit has completed
        this.isReady = true;
        //Create a tooltip that will remain hidden until hover
        this._tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style({
                "opacity": 0,
                "pointer-events": "none",
                "position": "absolute"
            });
        //Set initial values from querystring if they existing
        this.draw();
    }

    ngOnChanges(): void {
        if(this.isReady) this.draw();
    }

    createBarGraph(): void {
        var _this = this;
        var padding = 2;
        //Find best fit for data to fill height
        var yMultiplier = _this.height / d3.max(_this.data, function(d: any) { return d[_this.yKey]; });
        //Find best fit for data to fill width
        var xMultiplier = _this.width / _this.data.length;
        var svg = d3.select(_this.el.nativeElement).append("svg").attr({ width: _this.width, height: _this.height });
        //Bars
        svg.selectAll("rect").data(_this.data).enter().append("rect")
            .attr({
                x: function(d: any,i: number) { return i * xMultiplier;},
                y: function(d: any) { return _this.height - (d[_this.yKey] * yMultiplier); },
                width: xMultiplier - padding,
                height: function(d: any) { return d[_this.yKey] * yMultiplier; },
                class: function(d: any) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
            })
            //Dynamic Lables
            .on("mouseover", function(d: any) {
                //Show tooltip at mouse pointer
                _this._tooltip.transition().duration(500).style("opacity", 0.9);
                    var tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
                    tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
                   _this._tooltip.html(tip)
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px")
                //Add y value to top of bar
                svg.append("text")
                    .text(d[_this.yKey])
                    .attr({
                        x: parseFloat(d3.select(this).attr("x")) + parseFloat(d3.select(this).attr("width"))/2,
                        y: parseFloat(d3.select(this).attr("y")) + 14, //Text 14px below the bar top, or roughly up 1em
                        "text-anchor": "middle",
                        id: "hoverLabel_" + d[_this.yKey]
                    });
            })
            .on("mouseout", function(d: any) {
                //Hide tooltip
                _this._tooltip.transition().duration(500).style("opacity", 0);
                //Remove y value to top of bar
                d3.select("#hoverLabel_" + d[_this.yKey]).remove();
            })
        //Static Lables
        svg.selectAll("text").data(_this.data).enter().append("text")
            .text(function(d: any) { return _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true); })
            .attr({
                x: function(d: any, i: number) { return i * xMultiplier + (xMultiplier - padding) / 2; },
                y: function(d: any) { return _this.height - (d[_this.yKey] * yMultiplier) + 14; }, //Text 14px below the bar top, or roughly up 1em
                "text-anchor": "middle"
            });
   }

    createLineChart(): void {
        //Array must be sorted by x before passing to this function or the line will jump all over the place
        var _this = this;
        var padding = 26;
        var isDate: boolean = (this.xType=="date");
        var xScale = this.scale(_this.xKey, [padding+5, _this.width-10], true);
        var yScale = this.scale(_this.yKey, [_this.height-padding, 10], false);
        var xAxisGen = d3.svg.axis().scale(xScale).orient("bottom");
        if(isDate) {
            xAxisGen.tickFormat(d3.time.format("%b"));
        }
        var yAxisGen = d3.svg.axis().scale(yScale).orient("left");
        var lineFunction = d3.svg.line()
            //Make sure all date strings are date objects before putting them into the path
            .x(function(d: any) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); })
            .y(function(d: any) { return yScale(d[_this.yKey]); })
            .interpolate("linear");
        var svg = d3.select(_this.el.nativeElement).append("svg").attr({ width: _this.width, height: _this.height });
        //Line
        svg.append("path")
           .attr("class", "d3-path")
            .attr({
                d: lineFunction(_this.data),
                "fill": "none"
            });
        //Dots
        svg.selectAll("circle").data(_this.data).enter().append("circle")
            .attr({
                cx: function(d: any) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
                cy: function(d: any) { return yScale(d[_this.yKey]); },
                r: 3,
                class: function(d: any) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
            })
            //Dynamic Lables
            .on("mouseover", function(d: any) {
                //Show tooltip at mouse pointer
                _this._tooltip.transition()
                    .duration(500)
                    .style("opacity", 0.9);
                    var tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
                    tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
                   _this._tooltip.html(tip)
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px")
            })
            .on("mouseout", function(d: any) {
                //Hide tooltip
                _this._tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            })
        //Lables
        svg.selectAll("text").data(_this.data).enter().append("text")
            .text(function(d: any) { return _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true); })
            .attr({
                x: function(d: any) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
                y: function(d: any) { return yScale(d[_this.yKey]); },
                "text-anchor": "start",
                class: function(d: any) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
            });
        var xAxis = svg.append("g").call(xAxisGen)
            .attr({
                class: "d3-axis",
                transform: "translate(0, " + (_this.height-padding) + ")"
            });
        var yAxis = svg.append("g").call(yAxisGen)
            .attr({
                class: "d3-axis",
                transform: "translate(" + padding + ", 0)"
            });
    }

    createPieChart(): void {
        var _this = this;
        var isDate: boolean = (this.xType=="date");
        var timeFormat = d3.time.format("%b");
        var r = _this.width/2;
        var color = d3.scale.category20c();
        var vis = d3.select(_this.el.nativeElement).append("svg:svg").data([_this.data])
            .attr({ width: r*2, height: r*2 })
            .append("svg:g")
            .attr("transform", "translate(" + r + "," + r + ")");
        var pie = d3.layout.pie().value(function(d: any) { return d[_this.yKey]; });
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        arcs.append("svg:path")
            .attr({
                fill: function(d: any, i: any){ return color(i); },
                d: function (d: any) { return arc(d); }
            })
            //Dynamic Lables
            .on("mouseover", function(d: any, i: number) {
                //Show tooltip at mouse pointer
                _this._tooltip.transition().duration(500).style("opacity", 0.9);
                    var tip = '<strong>' + _this.xKey + ':</strong> ' + _this.data[i][_this.xKey] + '<br/>';
                    tip += '<strong>' + _this.yKey + ':</strong> ' + _this.data[i][_this.yKey] + '<br/>';
                   _this._tooltip.html(tip)
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px")
            })
            .on("mouseout", function(d: any) {
                //Hide tooltip
                _this._tooltip.transition().duration(500).style("opacity", 0);
            })
        //Labels
        arcs.append("svg:text")
            .attr({
                class: "d3-axis",
                transform: function(d: any) {
                    d.innerRadius = 0;
                    d.outerRadius = r;
                    var labelR = r * 0.9;
                    var c = arc.centroid(d), x = c[0], y = c[1],
                    // pythagorean theorem for hypotenuse
                    h = Math.sqrt(x*x + y*y);
                    return "translate(" + (x/h * labelR) +  ',' + (y/h * labelR) +  ")";
                },
                "text-anchor": "middle"
            })
            .text( function(d: any, i: number) {
                var max = d3.max(_this.data, function(d: any) { return d[_this.yKey]; });
                var min = d3.min(_this.data, function(d: any) { return d[_this.yKey]; });
                var xValue = _this.data[i][_this.xKey];
                var yValue = _this.data[i][_this.yKey];
                if((_this.labels!='none') && ((_this.labels=='minmax' && (yValue==max || yValue==min)) || (_this.labels=='all')))  {
                    return isDate ? timeFormat(new Date(xValue)) : xValue;
                }
            });
    }

    createScatterPlot(): void {
        //Unlike LineChart, this array does not need to be sorted by x
        var _this = this;
        var padding = 26;
        var isDate: boolean = (this.xType=="date");
        var xScale = this.scale(_this.xKey, [padding+5, _this.width-10], true);
        var yScale = this.scale(_this.yKey, [_this.height-padding, 10], false);
        var xAxisGen = d3.svg.axis().scale(xScale).orient("bottom");
        if(isDate) {
            xAxisGen.tickFormat(d3.time.format("%b"));
        }
        var yAxisGen = d3.svg.axis().scale(yScale).orient("left");
        var svg = d3.select(_this.el.nativeElement).append("svg").attr({ width: _this.width, height: _this.height });
        //Dots
        svg.selectAll("circle").data(_this.data).enter().append("circle")
            .attr({
                cx: function(d: any) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
                cy: function(d: any) { return yScale(d[_this.yKey]); },
                r: 5,
                class: function(d: any) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
            })
            //Dynamic Lables
            .on("mouseover", function(d: any) {
                //Show tooltip at mouse pointer
                _this._tooltip.transition()
                    .duration(500)
                    .style("opacity", 0.9);
                    var tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
                    tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
                   _this._tooltip.html(tip)
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px")
            })
            .on("mouseout", function(d: any) {
                //Hide tooltip
                _this._tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            })
        //Static Lables
        svg.selectAll("text").data(_this.data).enter().append("text")
            .text(function(d: any) { return _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true); })
            .attr({
                x: function(d: any) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
                y: function(d: any) { return yScale(d[_this.yKey]); },
                "text-anchor": "start",
                class: function(d: any) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
            });
        var xAxis = svg.append("g").call(xAxisGen)
            .attr({
                class: "d3-axis",
                transform: "translate(0, " + (_this.height-padding) + ")"
            });
        var yAxis = svg.append("g").call(yAxisGen)
            .attr({
                class: "d3-axis",
                transform: "translate(" + padding + ", 0)"
            });
    }

    classPicker(value: number, warningLevel: number): string {
        //Returns a warning class that can be styles through CSS to make data above the warningLevel stand out
        if (value >= warningLevel) {
            return "d3-warning";
        } else {
            return "d3-default";
        }
    }

    draw(): void {
        //Remove any existing SVG content before re-drawing
        d3.select(this.el.nativeElement).selectAll("*").remove();
        switch (this.type) {
            case "bar":
                this.createBarGraph();
                break;
            case "line":
                this.createLineChart();
                break;
            case "pie":
                this.createPieChart();
                break;
            case "scatter":
                this.createScatterPlot();
                break;
        }
    }

    scale(key: string, range: Array<number>, useMin: boolean=false): any {
        //scale to use to best fit data into viewable space
        //size refers to the x or y pixel size
        var _this = this;
        var min: any, max: any, scale: any;
        if(this.xType=="date") {
            min = new Date(d3.min(_this.data, function(d: any) { return d[key]; }));
            max = new Date(d3.max(_this.data, function(d: any) { return d[key]; }));
            scale = d3.time.scale();
        } else {
            if(useMin) {
                min = d3.min(_this.data, function(d: any) { return d[key]; });
            } else {
                min = 0;
            }
            max = d3.max(_this.data, function(d: any) { return d[key]; });
            scale = d3.scale.linear();
        }
        return scale.domain([min, max]).range(range);
    }

    showLabels(key: string, value: any, type: string, useMin: boolean=true): any {
        //Allows for either showing no labels, just the min and max labels, or all labels
        var _this = this;
        var max = d3.max(_this.data, function(d: any) { return d[key]; });
        var min = 0;
        if(useMin) {
            min = d3.min(_this.data, function(d: any) { return d[key]; });
        }
        if((type!='none') && ((type=='minmax' && (value==max || value==min)) || (type=='all')))  {
            return value;
        }
    }
}
