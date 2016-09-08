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
var router_1 = require('@angular/router');
var GraphDemoComponent = (function () {
    function GraphDemoComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        //object is not limited to just x and y columns
        this.data = [
            { month: "2015-01", sales: 100 },
            { month: "2015-02", sales: 130 },
            { month: "2015-03", sales: 170 },
            { month: "2015-04", sales: 220 },
            { month: "2015-05", sales: 280 },
            { month: "2015-06", sales: 300 },
            { month: "2015-07", sales: 270 },
            { month: "2015-08", sales: 230 },
            { month: "2015-09", sales: 180 },
            { month: "2015-10", sales: 140 },
            { month: "2015-11", sales: 120 },
            { month: "2015-12", sales: 130 }
        ];
        //For styling graphs and charts, make sure to look at the CSS file options
        this.height = 300;
        this.labels = ["none", "all", "minmax"];
        this.label = "minmax";
        this.warningLevel = 250;
        this.width = 350;
    }
    GraphDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Pass as params (graph;warningLevel=25) or as queryString (graph?warningLevel=25)
        //this.sub = this._router.routerState.queryParams.subscribe(params => {
        this.sub = this._route.params.subscribe(function (params) {
            //Allow the user to pass a querystring that overrides the default graph options
            var height = +params['height']; // (+) converts string 'id' to a number
            if (height)
                _this.height = height;
            var width = +params['width'];
            if (width)
                _this.width = width;
            var label = params['label'];
            if (label)
                _this.label = label;
            var warningLevel = +params['warningLevel'];
            if (warningLevel)
                _this.warningLevel = warningLevel;
        });
    };
    GraphDemoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GraphDemoComponent.prototype.onUpdateLabel = function (event) {
        //Only the value roles up to the parent select.  To get the label you have to go to the selected option
        this.label = event.target.value;
    };
    GraphDemoComponent = __decorate([
        core_1.Component({
            selector: 'graph-demo',
            styleUrls: ['app/demos/graph-demo.component.css'],
            templateUrl: 'app/demos/graph-demo.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], GraphDemoComponent);
    return GraphDemoComponent;
}());
exports.GraphDemoComponent = GraphDemoComponent;

//# sourceMappingURL=graph-demo.component.js.map
