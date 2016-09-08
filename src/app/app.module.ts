/// <reference path="../../typings/index.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }    from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { appRouting } from './app.routing'

import { AddressFormComponent } from './user/address-form.component'
import { AppComponent } from './app.component';
import { D3GraphComponent } from './components/d3-graph.component';
import { DragDemoComponent } from './demos/drag-demo.component';
import { Dragula } from './directives/dragula.directive';
import { FilterObjectsPipe } from './pipes/filter-objects.pipe';
import { FloorDemoComponent } from './demos/floor-demo.component';
import { GraphDemoComponent } from './demos/graph-demo.component';
import { HelpComponent } from './help/help.component';
import { HelpHomeComponent } from './help/help-home.component';
import { HelpNavComponent } from './help/help-nav.component';
import { HomeComponent } from './home.component';
import { ModalDemoComponent } from './demos/modal-demo.component';
import { PdfDemoComponent } from './demos/pdf-demo.component';
import { ProgressBarComponent } from './nav/progress-bar.component';
import { SortObjectsPipe } from './pipes/sort-objects.pipe';
import { TokenComponent } from './login/token.component';
import { TopNavComponent } from './nav/nav-top.component';
import { UserFormComponent } from './user/user-form.component'
import { UserListComponent } from './user/user-list.component'
import { UserHomeComponent } from './user/user-home.component';

@NgModule({
    declarations: [
        AddressFormComponent,
        AppComponent,
        D3GraphComponent,
        DragDemoComponent,
        Dragula,
        FilterObjectsPipe,
        FloorDemoComponent,
        GraphDemoComponent,
        HelpComponent,
        HelpHomeComponent,
        HelpNavComponent,
        HomeComponent,
        ModalDemoComponent,
        PdfDemoComponent,
        ProgressBarComponent,
        SortObjectsPipe,
        TokenComponent,
        TopNavComponent,
        UserFormComponent,
        UserListComponent,
        UserHomeComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}