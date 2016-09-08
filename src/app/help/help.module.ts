import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
/* Module Declarations */
import { HelpComponent } from './help.component';
import { HelpHomeComponent } from './help-home.component';
import { HelpNavComponent } from './help-nav.component';
import { routing } from './help.routing';

@NgModule({
    declarations: [
        HelpComponent,
        HelpHomeComponent,
        HelpNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        routing
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

})
export class HelpModule {}