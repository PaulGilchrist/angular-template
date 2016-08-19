import { addProviders, inject } from '@angular/core/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { IdentityService } from './identity.service';
import { UserService } from './user.service';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';

describe('UserService', () => {
    let userService: any;
    let users: User[];
    beforeEach(() => {
        addProviders([HTTP_PROVIDERS, IdentityService, UserService]);
    });
    it('Successfully pulled correct number of users from remote API', inject([UserService], (service: any, done: any) => {
        service.getUsers().subscribe((data: User[]) => {
            users = data;
            expect(users.length).toBe(241);
            done();
        });
    }));
    it('Successfully pulled the correct first user from remote API', inject([UserService], (service: any) => {
        //Assumes the API has already pulled user info
        expect(users[0].firstName).toEqual('Aaron');
    }));
    it('Successfully pulled addresses for a given user from remote API', inject([UserService], (service: any, done: any) => {
        userService.getUserAddresses(users[0]).subscribe((addresses: Address[]) => {
            expect(addresses.length).toBe(2);
            done();
        });
    }));
});
