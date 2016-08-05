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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var addresses_data_1 = require('./../data/addresses.data');
var users_data_1 = require('./../data/users.data');
var UserService = (function () {
    function UserService() {
        //This is a mock version of api-user.service.ts
        //To use the actual API, rename this file to "mock-user.service.ts"" and rename "api-user.service.ts"" to just "user.service.ts", then rebuild (gulp rebuild)
        //public variables
        this.users = users_data_1.USERS; //Full list of users
        //private variables
        this._addresses = addresses_data_1.ADDRESSES; //Full list of addresses
    }
    UserService.prototype.getUsers = function () {
        //We already have the data so simulate an async call
        return Observable_1.Observable.of(this.users);
    };
    UserService.prototype.getUserAddresses = function (user) {
        //We already have the data so simulate an async call
        //Reduce the result down to just the addresses for the given user
        var userAddresses = [];
        if (user.addresses && this._addresses) {
            for (var i = 0; i < user.addresses.length; i++) {
                for (var j = 0; j < this._addresses.length; j++) {
                    if (user.addresses[i] === this._addresses[j].id) {
                        userAddresses.push(this._addresses[j]);
                    }
                }
            }
        }
        return Observable_1.Observable.of(userAddresses);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=user.service.js.map
