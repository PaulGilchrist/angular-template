import { Injectable } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';

import { environment } from '../../environments/environment';
import { AdalService } from 'adal-angular4';

@Injectable()
export class AppInsightsService {

    private config: Microsoft.ApplicationInsights.IConfig = {
        instrumentationKey: environment.applicationInsights.instrumentationKey
    };

    constructor(public adalService: AdalService) {
        if (!AppInsights.config) {
            AppInsights.downloadAndSetup(this.config);
            if(adalService.userInfo.authenticated) {
                AppInsights.setAuthenticatedUserContext(adalService.userInfo.profile.upn);
            }
        }
    }

    logPageView(name?: string, url?: string, properties?: any, measurements?: any, duration?: number) {
        AppInsights.trackPageView(name, url, properties, measurements, duration);
    }

    logEvent(name: string, properties?: any, measurements?: any) {
        AppInsights.trackEvent(name, properties, measurements);
    }

    logException(exception: Error, handledAt?: string, properties?: any, measurements?: any) {
        AppInsights.trackException(exception, handledAt, properties, measurements);
    }

    logTrace(message: string, properties?: any, severityLevel?: any) {
        AppInsights.trackTrace(message, properties, severityLevel);
    }

}
