import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { UserService } from './services/user.service';
import { ApiInterceptor } from './services/api.interceptor';

@NgModule({
    declarations: [
        AddressFormComponent,
        UserFormComponent,
        UserListComponent,
        UserHomeComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild([
            { path: '', component: UserHomeComponent }
        ]),
        SharedModule, // Required to leverage table sorting and filtering
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, }, //Add token to all API requests
        UserService
    ]
})
export class UserModule {}
