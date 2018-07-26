import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-user-test',
	templateUrl: './user-test.component.html'
})
export class UserTestComponent {

	constructor(public _userService: UserService) { }

	test(): void {
		this._userService.getUsers(true);
	}
}
