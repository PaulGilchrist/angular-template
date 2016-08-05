/// <reference path="../../typings/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic'
import { AppComponent } from './app.component'
import { appRouterProviders  } from './app.routes'
import { provide, enableProdMode }    from '@angular/core'
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

enableProdMode();
bootstrap(AppComponent, [appRouterProviders, provide(LocationStrategy, { useClass: HashLocationStrategy }), provideForms(), disableDeprecatedForms()])
    .catch(err => console.error(err));
