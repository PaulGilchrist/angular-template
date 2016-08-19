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
var states_data_1 = require('./../data/states.data');
var user_service_1 = require('../services/user.service');
var AddressFormComponent = (function () {
    function AddressFormComponent(_userService) {
        this._userService = _userService;
        this._address = null;
        this._user = null;
        this.isActive = false;
        this.isBusy = false;
        this.states = states_data_1.STATES; //Full list of states
        //Bubble up that the form was saved
        this.onSave = new core_1.EventEmitter();
    }
    Object.defineProperty(AddressFormComponent.prototype, "user", {
        set: function (user) {
            var _this = this;
            if (user) {
                this.isBusy = true;
                this._user = user;
                this._userService.getUserAddresses(user)
                    .subscribe(function (addresses) {
                    _this._address = addresses[0],
                        _this.name = addresses[0].name,
                        _this.streetNumber = addresses[0].streetNumber,
                        _this.streetName = addresses[0].streetName,
                        _this.city = addresses[0].city,
                        _this.state = addresses[0].state,
                        _this.zipCode = addresses[0].zipCode,
                        _this.isActive = true,
                        _this.isBusy = false;
                }, function (error) { return _this.errorMessage = error; });
            }
        },
        enumerable: true,
        configurable: true
    });
    AddressFormComponent.prototype.onUpdateState = function (event) {
        //Only the value roles up to the parent select.  To get the label you have to go to the selected option
        toastr.info(event.target.selectedOptions[0].text);
    };
    AddressFormComponent.prototype.save = function () {
        //For the purpose of this demo, we are not going to save directly back to the API, but rather to the in memory list
        this._address.name = this.name;
        this._address.streetNumber = this.streetNumber;
        this._address.streetName = this.streetName;
        this._address.city = this.city;
        //We need to convert from full state name to state abbreviation
        this._address.state = _.where(states_data_1.STATES, { name: this.state });
        this._address.zipCode = this.zipCode;
        //We will also set the address as isDirty so it can later update the API in bulk
        this._address.isDirty = true;
        //Bubble up that this user has been saved in case the parent is interested
        this.onSave.emit(this._address);
    };
    AddressFormComponent.prototype.cancel = function () {
        //Reset the form back to the original user details
        this.name = this._address.name;
        this.streetNumber = this._address.streetNumber;
        this.streetName = this._address.streetName;
        this.city = this._address.city;
        this.state = this._address.state;
        this.zipCode = this._address.zipCode;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AddressFormComponent.prototype, "user", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddressFormComponent.prototype, "onSave", void 0);
    AddressFormComponent = __decorate([
        core_1.Component({
            selector: 'address-form',
            styleUrls: ['app/user/address-form.component.css'],
            templateUrl: 'app/user/address-form.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AddressFormComponent);
    return AddressFormComponent;
}());
exports.AddressFormComponent = AddressFormComponent;
//# sourceMappingURL=address-form.component.js.map