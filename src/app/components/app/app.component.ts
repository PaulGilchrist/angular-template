import { Component, Inject, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { AppInsightsService } from '../../services/app-insights.service';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private adalService: AdalService, private appInsightsService: AppInsightsService) {
    // init requires object with clientId and tenant properties
    adalService.init(environment.azureAuthProvider);
  }

  ngOnInit(): void {
    this.setAppInsights();
    // Extend jQuery to allow for simpler animations
    $.fn.extend({
      animateCss(animationName: string) {
        // Remove animation if it is still an added class
        $(this).removeClass('animated ' + animationName);
        const animationEnd =
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this)
          .addClass('animated ' + animationName)
          .one(animationEnd, function() {
            // Remove animation now that it is complete
            $(this).removeClass('animated ' + animationName);
          });
      }
    });
  }

    private setAppInsights() {
        try {
            const s = document.createElement('script');
            s.type = 'text/javascript';
// tslint:disable-next-line: max-line-length
            s.innerHTML = 'var appInsights=window.appInsights||function(a){ function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c }({ instrumentationKey:' + environment.applicationInsights.instrumentationKey + ' }); window.appInsights=appInsights,appInsights.queue&&0===appInsights.queue.length&&appInsights.trackPageView();';
            const head = document.getElementsByTagName('head')[0];
            head.appendChild(s);
        } catch {
        }
    }

}
