import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { ConnectivityService } from 'angular-connectivity'; // My NPM Package
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-nav-top',
  styleUrls: ['./nav-top.component.css'],
  templateUrl: './nav-top.component.html'
})
export class NavTopComponent implements OnInit, OnDestroy {
    shrinkNavbar = false;
    isConnected = true;
    subscriptions: Subscription[] = [];

  constructor(
    public adalService: AdalService,
    private connectivityService: ConnectivityService,
    private _location: Location
  ) {}

  onScroll(event: any): void {
    // Shrink the header top and bottom padding when scrolling beyond 300px
    this.shrinkNavbar =
      (window.pageYOffset || document.documentElement.scrollTop) > 300;
  }

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => this.isConnected = isConnected));
  }

  ngOnDestroy(): void {
    // Unsubscribe all subscriptions to avoid memory leak
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  currentPage(path: string): boolean {
    let result = false;
    const locationPath = this._location.path();
    if (path.length === 0) {
      // Root
      result = locationPath.length === 0;
    } else {
      // Does the current path start with "path"?
      result = locationPath.indexOf(path) === 0;
    }
    return result;
  }

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logOut();
  }

  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }
}
