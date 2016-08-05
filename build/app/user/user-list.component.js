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
var filter_objects_pipe_1 = require('../pipes/filter-objects.pipe');
var progress_bar_component_1 = require('../nav/progress-bar.component');
var sort_objects_pipe_1 = require('../pipes/sort-objects.pipe');
var user_service_1 = require('../services/user.service');
var UserListComponent = (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
        this.onSelect = new core_1.EventEmitter();
        this.sortType = 'firstName';
        this.sortReverse = false;
        this.searchString = '';
    }
    UserListComponent.prototype.ngOnDestroy = function () {
        //Make sure all the users are saved to the API before leaving this component
        //Look for angular to release a better lifecycle hook than onDestroy for this
        //     Doing this earlier in the lifecycle would allow for leaving the page to be canceled
        var usersRequiringSave = _.where(this._userService.users, { isDirty: true });
        if (usersRequiringSave.length > 0) {
            $.confirm({
                title: 'Confirm!',
                content: 'Save all modified users?',
                confirmButtonClass: 'btn-info',
                cancelButtonClass: 'btn-danger',
                closeIcon: true,
                icon: 'fa fa-warning',
                confirm: function () {
                    _.each(usersRequiringSave, function (user) {
                        //Simulate saving the user changes
                        user.isDirty = false;
                    });
                    $.alert({
                        title: 'Saved!',
                        content: 'All modified users have been saved',
                        autoClose: 'confirm|1000',
                        backgroundDismiss: true
                    });
                },
                cancel: function () {
                    $.alert({
                        title: 'Canceled!',
                        content: 'Modified users have not been saved',
                        autoClose: 'confirm|1000',
                        backgroundDismiss: true
                    });
                }
            });
        }
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.isBusy = true;
        this.getUsers();
        this.isListOpen = true;
    };
    UserListComponent.prototype.changeSort = function (newSortType) {
        if (newSortType === this.sortType) {
            //clicking the same column twice toggles the sort order
            this.sortReverse = !this.sortReverse;
        }
        else {
            this.sortType = newSortType;
        }
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.isBusy = true;
        this._userService.getUsers()
            .subscribe(function (users) { return _this.isBusy = false; }, function (error) { return _this.errorMessage = error; });
    };
    UserListComponent.prototype.selectUser = function (user) {
        //Bubble up to the parent that a new user was selected
        this.onSelect.emit(user);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserListComponent.prototype, "onSelect", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            directives: [progress_bar_component_1.ProgressBarComponent],
            pipes: [filter_objects_pipe_1.FilterObjectsPipe, sort_objects_pipe_1.SortObjectsPipe],
            selector: 'user-list',
            styleUrls: ['app/user/user-list.component.css'],
            templateUrl: 'app/user/user-list.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;

//# sourceMappingURL=user-list.component.js.map
