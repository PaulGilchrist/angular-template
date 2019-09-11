import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { AppInsightsService } from '../../services/app-insights.service';

import { environment } from '../../../environments/environment';

import * as $ from 'jquery';

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
    this.appInsightsService.logPageView('app.component', '/');
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

}
