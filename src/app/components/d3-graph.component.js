"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var D3GraphComponent = (function () {
    function D3GraphComponent(el) {
        this.el = el;
        /* ToDo Ideas (d3.v3.js)
            Leverage d3.geo.path().area()
            Maps.  See http://app.pluralsight.com/training/player?course=d3js-data-visualization-fundamentals
            Word Cloud
            Stacked Bars
            Multi-line
        */
        this.isReady = false;
        this.data = null;
        this.height = 300;
        this.labels = "all";
        this.warningLevel = Infinity;
        this.width = 350;
        this.type = "bar";
        this.xKey = "x"; //The key within the data object that contains the x values
        this.yKey = "y"; //The key within the data object that contains the y values
        this.xType = "number"; //Valid options are number or date
    }
    D3GraphComponent.prototype.ngOnInit = function () {
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
    };
    D3GraphComponent.prototype.ngOnChanges = function () {
        if (this.isReady)
            this.draw();
    };
    D3GraphComponent.prototype.createBarGraph = function () {
        var _this = this;
        var padding = 2;
        //Find best fit for data to fill height
        var yMultiplier = _this.height / d3.max(_this.data, function (d) { return d[_this.yKey]; });
        //Find best fit for data to fill width
        var xMultiplier = _this.width / _this.data.length;
        var svg = d3.select(_this.el.nativeElement).append("svg").attr({ width: _this.width, height: _this.height });
        //Bars
        svg.selectAll("rect").data(_this.data).enter().append("rect")
            .attr({
            x: function (d, i) { return i * xMultiplier; },
            y: function (d) { return _this.height - (d[_this.yKey] * yMultiplier); },
            width: xMultiplier - padding,
            height: function (d) { return d[_this.yKey] * yMultiplier; },
            class: function (d) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
        })
            .on("mouseover", function (d) {
            //Show tooltip at mouse pointer
            _this._tooltip.transition().duration(500).style("opacity", 0.9);
            var tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
            tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
            _this._tooltip.html(tip)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            //Add y value to top of bar
            svg.append("text")
                .text(d[_this.yKey])
                .attr({
                x: parseFloat(d3.select(this).attr("x")) + parseFloat(d3.select(this).attr("width")) / 2,
                y: parseFloat(d3.select(this).attr("y")) + 14,
                "text-anchor": "middle",
                id: "hoverLabel_" + d[_this.yKey]
            });
        })
            .on("mouseout", function (d) {
            //Hide tooltip
            _this._tooltip.transition().duration(500).style("opacity", 0);
            //Remove y value to top of bar
            d3.select("#hoverLabel_" + d[_this.yKey]).remove();
        });
        //Static Lables
        svg.selectAll("text").data(_this.data).enter().append("text")
            .text(function (d) { return _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true); })
            .attr({
            x: function (d, i) { return i * xMultiplier + (xMultiplier - padding) / 2; },
            y: function (d) { return _this.height - (d[_this.yKey] * yMultiplier) + 14; },
            "text-anchor": "middle"
        });
    };
    D3GraphComponent.prototype.createLineChart = function () {
        //Array must be sorted by x before passing to this function or the line will jump all over the place
        var _this = this;
        var padding = 26;
        var isDate = (this.xType == "date");
        var xScale = this.scale(_this.xKey, [padding + 5, _this.width - 10], true);
        var yScale = this.scale(_this.yKey, [_this.height - padding, 10], false);
        var xAxisGen = d3.svg.axis().scale(xScale).orient("bottom");
        if (isDate) {
            xAxisGen.tickFormat(d3.time.format("%b"));
        }
        var yAxisGen = d3.svg.axis().scale(yScale).orient("left");
        var lineFunction = d3.svg.line()
            .x(function (d) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); })
            .y(function (d) { return yScale(d[_this.yKey]); })
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
            cx: function (d) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
            cy: function (d) { return yScale(d[_this.yKey]); },
            r: 3,
            class: function (d) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
        })
            .on("mouseover", function (d) {
            //Show tooltip at mouse pointer
            _this._tooltip.transition()
                .duration(500)
                .style("opacity", 0.9);
            var tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
            tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
            _this._tooltip.html(tip)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
            .on("mouseout", function (d) {
            //Hide tooltip
            _this._tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
        //Lables
        svg.selectAll("text").data(_this.data).enter().append("text")
            .text(function (d) { return _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true); })
            .attr({
            x: function (d) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
            y: function (d) { return yScale(d[_this.yKey]); },
            "text-anchor": "start",
            class: function (d) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
        });
        var xAxis = svg.append("g").call(xAxisGen)
            .attr({
            class: "d3-axis",
            transform: "translate(0, " + (_this.height - padding) + ")"
        });
        var yAxis = svg.append("g").call(yAxisGen)
            .attr({
            class: "d3-axis",
            transform: "translate(" + padding + ", 0)"
        });
    };
    D3GraphComponent.prototype.createPieChart = function () {
        var _this = this;
        var isDate = (this.xType == "date");
        var timeFormat = d3.time.format("%b");
        var r = _this.width / 2;
        var color = d3.scale.category20c();
        var vis = d3.select(_this.el.nativeElement).append("svg:svg").data([_this.data])
            .attr({ width: r * 2, height: r * 2 })
            .append("svg:g")
            .attr("transform", "translate(" + r + "," + r + ")");
        var pie = d3.layout.pie().value(function (d) { return d[_this.yKey]; });
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        arcs.append("svg:path")
            .attr({
            fill: function (d, i) { return color(i); },
            d: function (d) { return arc(d); }
        })
            .on("mouseover", function (d, i) {
            //Show tooltip at mouse pointer
            _this._tooltip.transition().duration(500).style("opacity", 0.9);
            var tip = '<strong>' + _this.xKey + ':</strong> ' + _this.data[i][_this.xKey] + '<br/>';
            tip += '<strong>' + _this.yKey + ':</strong> ' + _this.data[i][_this.yKey] + '<br/>';
            _this._tooltip.html(tip)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
            .on("mouseout", function (d) {
            //Hide tooltip
            _this._tooltip.transition().duration(500).style("opacity", 0);
        });
        //Labels
        arcs.append("svg:text")
            .attr({
            class: "d3-axis",
            transform: function (d) {
                d.innerRadius = 0;
                d.outerRadius = r;
                var labelR = r * 0.9;
                var c = arc.centroid(d), x = c[0], y = c[1], 
                // pythagorean theorem for hypotenuse
                h = Math.sqrt(x * x + y * y);
                return "translate(" + (x / h * labelR) + ',' + (y / h * labelR) + ")";
            },
            "text-anchor": "middle"
        })
            .text(function (d, i) {
            var max = d3.max(_this.data, function (d) { return d[_this.yKey]; });
            var min = d3.min(_this.data, function (d) { return d[_this.yKey]; });
            var xValue = _this.data[i][_this.xKey];
            var yValue = _this.data[i][_this.yKey];
            if ((_this.labels != 'none') && ((_this.labels == 'minmax' && (yValue == max || yValue == min)) || (_this.labels == 'all'))) {
                return isDate ? timeFormat(new Date(xValue)) : xValue;
            }
        });
    };
    D3GraphComponent.prototype.createScatterPlot = function () {
        //Unlike LineChart, this array does not need to be sorted by x
        var _this = this;
        var padding = 26;
        var isDate = (this.xType == "date");
        var xScale = this.scale(_this.xKey, [padding + 5, _this.width - 10], true);
        var yScale = this.scale(_this.yKey, [_this.height - padding, 10], false);
        var xAxisGen = d3.svg.axis().scale(xScale).orient("bottom");
        if (isDate) {
            xAxisGen.tickFormat(d3.time.format("%b"));
        }
        var yAxisGen = d3.svg.axis().scale(yScale).orient("left");
        var svg = d3.select(_this.el.nativeElement).append("svg").attr({ width: _this.width, height: _this.height });
        //Dots
        svg.selectAll("circle").data(_this.data).enter().append("circle")
            .attr({
            cx: function (d) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
            cy: function (d) { return yScale(d[_this.yKey]); },
            r: 5,
            class: function (d) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
        })
            .on("mouseover", function (d) {
            //Show tooltip at mouse pointer
            _this._tooltip.transition()
                .duration(500)
                .style("opacity", 0.9);
            var tip = '<strong>' + _this.xKey + ':</strong> ' + d[_this.xKey] + '<br/>';
            tip += '<strong>' + _this.yKey + ':</strong> ' + d[_this.yKey] + '<br/>';
            _this._tooltip.html(tip)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
            .on("mouseout", function (d) {
            //Hide tooltip
            _this._tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
        //Static Lables
        svg.selectAll("text").data(_this.data).enter().append("text")
            .text(function (d) { return _this.showLabels(_this.yKey, d[_this.yKey], _this.labels, true); })
            .attr({
            x: function (d) { return xScale(isDate ? new Date(d[_this.xKey]) : d[_this.xKey]); },
            y: function (d) { return yScale(d[_this.yKey]); },
            "text-anchor": "start",
            class: function (d) { return _this.classPicker(d[_this.yKey], _this.warningLevel); }
        });
        var xAxis = svg.append("g").call(xAxisGen)
            .attr({
            class: "d3-axis",
            transform: "translate(0, " + (_this.height - padding) + ")"
        });
        var yAxis = svg.append("g").call(yAxisGen)
            .attr({
            class: "d3-axis",
            transform: "translate(" + padding + ", 0)"
        });
    };
    D3GraphComponent.prototype.classPicker = function (value, warningLevel) {
        //Returns a warning class that can be styles through CSS to make data above the warningLevel stand out
        if (value >= warningLevel) {
            return "d3-warning";
        }
        else {
            return "d3-default";
        }
    };
    D3GraphComponent.prototype.draw = function () {
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
    };
    D3GraphComponent.prototype.scale = function (key, range, useMin) {
        if (useMin === void 0) { useMin = false; }
        //scale to use to best fit data into viewable space
        //size refers to the x or y pixel size
        var _this = this;
        var min, max, scale;
        if (this.xType == "date") {
            min = new Date(d3.min(_this.data, function (d) { return d[key]; }));
            max = new Date(d3.max(_this.data, function (d) { return d[key]; }));
            scale = d3.time.scale();
        }
        else {
            if (useMin) {
                min = d3.min(_this.data, function (d) { return d[key]; });
            }
            else {
                min = 0;
            }
            max = d3.max(_this.data, function (d) { return d[key]; });
            scale = d3.scale.linear();
        }
        return scale.domain([min, max]).range(range);
    };
    D3GraphComponent.prototype.showLabels = function (key, value, type, useMin) {
        if (useMin === void 0) { useMin = true; }
        //Allows for either showing no labels, just the min and max labels, or all labels
        var _this = this;
        var max = d3.max(_this.data, function (d) { return d[key]; });
        var min = 0;
        if (useMin) {
            min = d3.min(_this.data, function (d) { return d[key]; });
        }
        if ((type != 'none') && ((type == 'minmax' && (value == max || value == min)) || (type == 'all'))) {
            return value;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], D3GraphComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], D3GraphComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], D3GraphComponent.prototype, "labels", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], D3GraphComponent.prototype, "warningLevel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], D3GraphComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], D3GraphComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], D3GraphComponent.prototype, "xKey", void 0);
    __decorate([
        //The key within the data object that contains the x values
        core_1.Input(), 
        __metadata('design:type', String)
    ], D3GraphComponent.prototype, "yKey", void 0);
    __decorate([
        //The key within the data object that contains the y values
        core_1.Input(), 
        __metadata('design:type', String)
    ], D3GraphComponent.prototype, "xType", void 0);
    D3GraphComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'd3-graph',
            styleUrls: ['app/components/d3-graph.component.css'],
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], D3GraphComponent);
    return D3GraphComponent;
}());
exports.D3GraphComponent = D3GraphComponent;
//# sourceMappingURL=d3-graph.component.js.map