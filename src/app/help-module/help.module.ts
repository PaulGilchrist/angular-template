import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
/* Module Declarations */
import { HelpComponent } from './components/help/help.component';
import { HelpHomeComponent } from './components/help-home/help-home.component';
import { HelpNavComponent } from './components/help-nav/help-nav.component';


@NgModule({
    declarations: [
        HelpComponent,
        HelpHomeComponent,
        HelpNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HelpComponent,
                children: [
                    { path: '', component: HelpHomeComponent }
                ]
            }
        ])
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

})
export class HelpModule {}
