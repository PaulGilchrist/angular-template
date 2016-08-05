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
var FilterObjectsPipe = (function () {
    function FilterObjectsPipe() {
    }
    //Filters out any object where none of its properties contain the passed in search string
    FilterObjectsPipe.prototype.transform = function (input, query) {
        if (input != null && query != null && query.length > 0) {
            return input.filter(function (item) {
                for (var key in item) {
                    if (typeof item[key] === 'string') {
                        var inputLower = item[key].toLowerCase();
                        var queryLower = query.toLowerCase();
                        if (inputLower.indexOf(queryLower) !== -1) {
                            return true;
                        }
                    }
                }
            });
        }
        else {
            return input;
        }
    };
    FilterObjectsPipe = __decorate([
        core_1.Pipe({ name: 'filterObjects' }), 
        __metadata('design:paramtypes', [])
    ], FilterObjectsPipe);
    return FilterObjectsPipe;
}());
exports.FilterObjectsPipe = FilterObjectsPipe;

//# sourceMappingURL=filter-objects.pipe.js.map
