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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
require('rxjs/add/operator/of');
require('rxjs/add/operator/map');
var config_data_1 = require('../data/config.data');
var identity_service_1 = require('../services/identity.service');
var UserService = (function () {
    //Assumes HTTP_PROVIDERS was added as a provider at a higher level
    function UserService(http, _identityService) {
        this.http = http;
        this._identityService = _identityService;
        //constants
        this._maxUserCacheTimeMilliseconds = 3600000;
        //private variables
        this._usersUrl = config_data_1.CONFIG.apiUrl + '/users';
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        //if the users are less than 1 hour old do not GET them again from the API
        if (!this.users || (this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now())) {
            //Get users from API
            return this.http.get(this._usersUrl /*, { headers: this._identityService.appendAuthHeader(new Headers()) }*/)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.users = data,
                    _this._lastUserGetTime = Date.now(); //Track when the last successful user GET occured
            })
                .catch(this.handleError);
        }
        else {
            //Return existing users as an observable
            return Observable_1.Observable.of(this.users);
        }
    };
    UserService.prototype.getUserAddresses = function (user) {
        //The token is larger than the entire address payload.
        //If it was a requirement to secure this endpoint, then for performance reasons, it would be best to get all addresses one time
        //Then when looking for the addresses for a single user, do that in memory (but this is a demo, so small API calls are fine)
        var url = this._usersUrl + '/' + user.id + '/addresses';
        return this.http.get(url /*, { headers: this._identityService.appendAuthHeader(new Headers()) }*/)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, identity_service_1.IdentityService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=api-user.service.js.map