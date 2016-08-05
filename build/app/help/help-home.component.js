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
var HelpHomeComponent = (function () {
    function HelpHomeComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    HelpHomeComponent.prototype.ngOnInit = function () {
        /*
        *  Passing as ActivatedRoute params is not working because they are being passed to the parent
        *       due to how the default child route is part of the parent route, so we will use standard queryString
        */
        //this.sub = this._route.params.subscribe(params => {
        this.sub = this._router.routerState.queryParams.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                //Bring the id seleted into view
                $('#' + id)[0].scrollIntoView();
                //Adjust for the fact that we have a fixed 60px height top nav when scrolled or 80px when at top of page ("gettingStarted" section)
                var scrollOffset = -60;
                if (id == 'gettingStarted')
                    scrollOffset = -80;
                window.scrollBy(0, scrollOffset);
            }
        });
    };
    HelpHomeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        window.scrollBy(0, -60);
    };
    HelpHomeComponent = __decorate([
        core_1.Component({
            selector: 'help-home',
            templateUrl: 'app/help/help-home.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], HelpHomeComponent);
    return HelpHomeComponent;
}());
exports.HelpHomeComponent = HelpHomeComponent;

//# sourceMappingURL=help-home.component.js.map
