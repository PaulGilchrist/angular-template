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
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.isActive = false;
        this._user = null;
        //Bubble up that the form was saved
        this.onSave = new core_1.EventEmitter();
    }
    Object.defineProperty(UserFormComponent.prototype, "user", {
        set: function (user) {
            if (user) {
                this._user = user;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
                this.email = user.email;
                this.phone = user.phone;
                this.dob = null;
                this.isActive = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    UserFormComponent.prototype.save = function () {
        //For the purpose of this demo, we are not going to save directly back to the API, but rather to the in memory list
        this._user.firstName = this.firstName;
        this._user.lastName = this.lastName;
        this._user.email = this.email;
        this._user.phone = this.phone;
        //We will also set the user as isDirty so it can later update the API in bulk
        this._user.isDirty = true;
        //Bubble up that this user has been saved in case the parent is interested
        this.onSave.emit(this._user);
        //Remove the original animation before adding a different one
        var userForm = $("#user-form");
        userForm.removeClass("animated slideInLeft");
        //Add the new animation that will remove itself once completed
        userForm.animateCss("bounce");
    };
    UserFormComponent.prototype.cancel = function () {
        //Reset the form back to the original user details
        this.firstName = this._user.firstName;
        this.lastName = this._user.lastName;
        this.email = this._user.email;
        this.phone = this._user.phone;
        var userForm = $("#user-form");
        //Remove the original animation before adding a different one
        userForm.removeClass("animated slideInLeft");
        //Add the new animation that will remove itself once completed
        userForm.animateCss("shake");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], UserFormComponent.prototype, "user", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserFormComponent.prototype, "onSave", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styleUrls: ['app/user/user-form.component.css'],
            templateUrl: 'app/user/user-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;

//# sourceMappingURL=user-form.component.js.map
