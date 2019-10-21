import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';

import { AppInsightsService } from '../../services/app-insights.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    isSubscribed = localStorage.getItem('notificationSubscription') != null;

    constructor(public router: Router, private appInsightsService: AppInsightsService, private swPush: SwPush) {}

    ngOnInit() {
        // Example of how to add Application Insights tracking to a component
        this.appInsightsService.logPageView('home.component', '/home');
    }

    subscribe() {
        // Can reset using chrome://settings/content/notifications or clicking the icon to the lesft of the url and reset through chrome GUI
        this.swPush.messages    .requestSubscription({
            serverPublicKey: environment.vapid.publicKey
        })
        .then(subscription => {
            const notificationSubscription = JSON.stringify(subscription);
            localStorage.setItem('notificationSubscription', notificationSubscription);
            this.isSubscribed = true;
            console.log('Successfully subscribed to notifications');
            console.log(notificationSubscription);
        })
        .catch(error => {
            console.error('Could not subscribe to notifications', error);
            console.log(error);
         });
    }

    unsubscribe() {
        // Can reset using chrome://settings/content/notifications or clicking the icon to the lesft of the url and reset through chrome GUI
        this.swPush.requestSubscription({
            serverPublicKey: environment.vapid.publicKey
        })
        .then(subscription => {
            subscription.unsubscribe()
            .then(() => {
                localStorage.removeItem('notificationSubscription');
                this.isSubscribed = false;
                console.log('Unsubscribed successfully');
            })
            .catch(error => {
                console.error('Could not unsubscribe', error);
                console.log(error);
            });
        });
    }

}
