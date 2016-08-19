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
var address_form_component_1 = require('./address-form.component');
var user_form_component_1 = require('./user-form.component');
var user_list_component_1 = require('./user-list.component');
var UserHomeComponent = (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent.prototype.onSelect = function (user) {
        //Let the UserFormComponent know to populate user details and scroll it into view
        window.scrollTo(0, 0);
        this.user = user;
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            directives: [address_form_component_1.AddressFormComponent, user_form_component_1.UserFormComponent, user_list_component_1.UserListComponent],
            selector: 'user-home',
            templateUrl: 'app/user/user-home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user-home.component.js.map