/// <reference path="../../typings/index.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { appRouterProviders  } from './app.routes'
import { provide }    from '@angular/core'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component'
import { DragDemoComponent } from './demos/drag-demo.component'
import { FloorDemoComponent } from './demos/floor-demo.component'
import { GraphDemoComponent } from './demos/graph-demo.component'
import { HelpComponent } from './help/help.component'
import { HelpHomeComponent } from './help/help-home.component'
import { HomeComponent } from './home.component'
import { PdfDemoComponent } from './demos/pdf-demo.component'
import { TokenComponent } from './login/token.component'
import { UserHomeComponent } from './user/user-home.component'

@NgModule({
    declarations: [AppComponent,
        DragDemoComponent,
        FloorDemoComponent,
        GraphDemoComponent,
        HelpComponent,
        HelpHomeComponent,
        HomeComponent,
        PdfDemoComponent,
        TokenComponent,
        UserHomeComponent], // directives, components, and pipes owned by this NgModule
  imports: [BrowserModule, FormsModule],
  providers: [appRouterProviders, provide(LocationStrategy, { useClass: HashLocationStrategy })], // additional providers
  bootstrap: [AppComponent],
})
export class AppModule {}