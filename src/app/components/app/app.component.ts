import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private adalService: AdalService) {
    // init requires object with clientId and tenant properties
    adalService.init(environment.azureAuthProvider);
  }

  ngOnInit(): void {
    // Extend jQuery to allow for simpler animations
    $.fn.extend({
      animateCss: function(animationName: string) {
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
