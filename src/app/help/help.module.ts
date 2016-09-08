import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HelpComponent } from './help.component';
import { HelpHomeComponent } from './help-home.component';
import { HelpNavComponent } from './help-nav.component';

@NgModule({
    declarations: [
        HelpComponent,
        HelpHomeComponent,
        HelpNavComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

})
export class HelpModule {}