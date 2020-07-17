import { Component, OnInit } from '@angular/core';

import { Adal8Service } from 'adal-angular8';
import { AppInsightsService } from '../../../services/app-insights.service';

@Component({
  selector: 'app-token',
  styleUrls: ['./token.component.scss'],
  templateUrl: './token.component.html'
})
export class TokenComponent implements OnInit {
  constructor(
    public adalService: Adal8Service,
    private appInsightsService: AppInsightsService
  ) {}

  ngOnInit(): void {
    this.appInsightsService.logPageView('token.component', '/token');
    // // Initialize tooltips just for this component
    // $(function() {
    // 	// No typings for bootstrap's tooltip
    // 	$('my-token [data-toggle="tooltip"]')).tooltip({ container: 'body' });
    // });
  }

  getDateString(num: number): string {
    let returnString = '';
    if (num) {
      returnString = num + ' (' + new Date(num * 1000) + ')';
    }
    return returnString;
  }

  logout(): void {
    this.adalService.logOut();
  }
}
