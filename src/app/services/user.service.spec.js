"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var identity_service_1 = require('./identity.service');
var user_service_1 = require('./user.service');
describe('UserService', function () {
    var userService;
    var users;
    beforeEach(function () {
        testing_1.addProviders([http_1.HTTP_PROVIDERS, identity_service_1.IdentityService, user_service_1.UserService]);
    });
    it('Successfully pulled correct number of users from remote API', testing_1.inject([user_service_1.UserService], function (service, done) {
        service.getUsers().subscribe(function (data) {
            users = data;
            expect(users.length).toBe(241);
            done();
        });
    }));
    it('Successfully pulled the correct first user from remote API', testing_1.inject([user_service_1.UserService], function (service) {
        //Assumes the API has already pulled user info
        expect(users[0].firstName).toEqual('Aaron');
    }));
    it('Successfully pulled addresses for a given user from remote API', testing_1.inject([user_service_1.UserService], function (service, done) {
        userService.getUserAddresses(users[0]).subscribe(function (addresses) {
            expect(addresses.length).toBe(2);
            done();
        });
    }));
});
//# sourceMappingURL=user.service.spec.js.map