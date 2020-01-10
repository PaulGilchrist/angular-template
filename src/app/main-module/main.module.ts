import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import * as $ from 'jquery';

/* Module Declarations */
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/token/token.component';

@NgModule({
    declarations: [
        HomeComponent,
        TokenComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent },
            { path: 'token', component: TokenComponent }
        ])
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

})
export class MainModule {}
