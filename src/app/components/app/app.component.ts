import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import {OAuthService} from 'angular-oauth2-oidc';
import {config} from './../../authConfig';
import { AppInsightsService } from '../../services/app-insights.service';

import { environment } from '../../../environments/environment';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private appInsightsService: AppInsightsService, public router: Router, private swPush: SwPush, private authService: OAuthService) {}

    ngOnInit(): void {
        this.authService.configure(config);
        this.authService.timeoutFactor=0.3;
        this.authService.setupAutomaticSilentRefresh();
        this.authService.loadDiscoveryDocumentAndTryLogin();
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
        // If the user has not already answered, ask them if they would like to receive notifications
        if (environment.production) {
            this.swPush.requestSubscription({
                serverPublicKey: environment.vapid.publicKey
            })
            .then(subscription => {
                const notificationSubscription = JSON.stringify(subscription);
                localStorage.setItem('notificationSubscription', notificationSubscription);
                console.log('Successfully subscribed to notifications');
                console.log(notificationSubscription);
            })
            .catch(error => {
                if (Notification.permission === 'denied') {
                    console.warn('Permission for notifications was denied');
                } else {
                    console.error('Unable to subscribe to notifications', error);
                }
            });
            this.swPush.notificationClicks.subscribe(
                ({action, notification}) => {
                    // These will only execute if the application is already open
                    // To execute when application is closed, add code to ./sw-worker.js instead of here
                    switch (action) {
                    }
                }
            );
        }
    }

}
