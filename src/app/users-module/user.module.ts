import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SharedModule } from '../shared-module/shared.module';

import { AddressFormComponent } from './address-form.component';
import { UserFormComponent } from './user-form.component';
import { UserListComponent } from './user-list.component';
import { UserHomeComponent } from './user-home.component';
import { UserService } from './services/user.service';
import { routing } from './user.routing';

// Depends on the following being loaded from a parent module
// import { ProgressBarComponent } from './../nav/progress-bar.component';
// import { FilterObjectsPipe } from '../pipes/filter-objects.pipe';
// import { SortObjectsPipe } from '../pipes/sort-objects.pipe';

@NgModule({
    declarations: [
        AddressFormComponent,
        //FilterObjectsPipe,
        //ProgressBarComponent,
        //SortObjectsPipe,
        UserFormComponent,
        UserListComponent,
        UserHomeComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        routing
    ],
    providers: [UserService]
})
export class UserModule {}
