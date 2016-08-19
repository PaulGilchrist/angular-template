import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
export declare class UserListComponent implements OnInit, OnDestroy {
    _userService: UserService;
    onSelect: EventEmitter<User>;
    id: string;
    errorMessage: string;
    isListOpen: boolean;
    isBusy: boolean;
    sortType: string;
    sortReverse: boolean;
    searchString: string;
    constructor(_userService: UserService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    changeSort(newSortType: string): void;
    getUsers(): void;
    selectUser(user: User): void;
}
