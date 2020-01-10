import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppInsightsService } from '../../../services/app-insights.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(public router: Router, private appInsightsService: AppInsightsService) {}

    ngOnInit() {
        // Example of how to add Application Insights tracking to a component
        this.appInsightsService.logPageView('home.component', '/home');
    }

}
