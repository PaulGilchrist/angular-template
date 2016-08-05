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
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.now = 0;
        this.min = 0;
        this.max = 1000;
    }
    ProgressBarComponent.prototype.ngOnDestroy = function () {
        //Stop the client side processing
        clearInterval(this._interval);
    };
    ProgressBarComponent.prototype.ngOnInit = function () {
        //Animate the progress bar every 100 milliseconds
        var _this = this;
        this._interval = setInterval(function () {
            _this.now++;
            if (_this.now > _this.max) {
                //Start over
                _this.now = _this.min;
            }
        }, 100);
    };
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'progress-bar',
            templateUrl: 'app/nav/progress-bar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;

//# sourceMappingURL=progress-bar.component.js.map
