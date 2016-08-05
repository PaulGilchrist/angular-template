"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var identity_service_1 = require('./identity.service');
var user_service_1 = require('./user.service');
testing_1.describe('UserService', function () {
    var userService;
    var users;
    testing_1.beforeEachProviders(function () {
        return [
            http_1.HTTP_PROVIDERS,
            identity_service_1.IdentityService,
            user_service_1.UserService
        ];
    });
    testing_1.beforeEach(testing_1.inject([user_service_1.UserService], function (_service) {
        userService = _service;
    }));
    testing_1.it('Successfully pulled correct number of users from remote API', function (done) {
        userService.getUsers().subscribe(function (data) {
            users = data;
            testing_1.expect(users.length).toBe(241);
            done();
        });
    });
    testing_1.it('Successfully pulled the correct first user from remote API', function () {
        //Assumes the API has already pulled user info
        testing_1.expect(users[0].firstName).toEqual('Aaron');
    });
    testing_1.it('Successfully pulled addresses for a given user from remote API', function (done) {
        userService.getUserAddresses(users[0]).subscribe(function (addresses) {
            testing_1.expect(addresses.length).toBe(2);
            done();
        });
    });
});

//# sourceMappingURL=user.service.spec.js.map
