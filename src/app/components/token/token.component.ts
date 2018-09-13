import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-token',
  styleUrls: ['./token.component.css'],
  templateUrl: './token.component.html'
})
export class TokenComponent implements OnInit {
  constructor(
    private _location: Location,
    private _router: Router,
    public adalService: AdalService
  ) {}

  ngOnInit(): void {
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
