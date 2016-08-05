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
var SortObjectsPipe = (function () {
    function SortObjectsPipe() {
    }
    //Currently can only sort where (typeof input[field] === "string")
    //Will enhance later to support numbers and dates
    SortObjectsPipe.prototype.transform = function (input, field, desc) {
        if (desc === void 0) { desc = false; }
        if (input && field) {
            return input.sort(function (a, b) {
                if (a[field] < b[field]) {
                    return desc ? 1 : -1;
                }
                if (b[field] < a[field]) {
                    return desc ? -1 : 1;
                }
                return 0;
            });
        }
        return input;
    };
    SortObjectsPipe = __decorate([
        core_1.Pipe({ name: 'sortObjects' }), 
        __metadata('design:paramtypes', [])
    ], SortObjectsPipe);
    return SortObjectsPipe;
}());
exports.SortObjectsPipe = SortObjectsPipe;

//# sourceMappingURL=sort-objects.pipe.js.map
