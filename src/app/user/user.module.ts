import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AddressFormComponent } from './address-form.component';
import { FilterObjectsPipe } from './../pipes/filter-objects.pipe';
import { ProgressBarComponent } from './../nav/progress-bar.component';
import { SortObjectsPipe } from './../pipes/sort-objects.pipe';
import { UserFormComponent } from './user-form.component';
import { UserListComponent } from './user-list.component';
import { UserHomeComponent } from './user-home.component';
import { UserService } from './../services/user.service';
import { routing } from './user.routing';

@NgModule({
    declarations: [
        AddressFormComponent,
        FilterObjectsPipe,
        ProgressBarComponent,
        SortObjectsPipe,
        UserFormComponent,
        UserListComponent,
        UserHomeComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [UserService]
})
export class UserModule {}
