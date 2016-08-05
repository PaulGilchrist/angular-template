import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IdentityService } from './services/identity.service';
import { UserService } from './services/user.service';
import { TopNavComponent } from './nav/nav-top.component';

declare var $: any;
declare var System: any;

@Component({
    directives: [ROUTER_DIRECTIVES, TopNavComponent],
    //Even if we nav away from the user page, we want the UserService data to remain so provide at this higher level
    providers: [HTTP_PROVIDERS, IdentityService, UserService],
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        //Extend jQuery to allow for simpler animations
        $.fn.extend({
            animateCss: function (animationName: string) {
                //Remove animation if it is still an added class
                $(this).removeClass('animated ' + animationName);
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                    //Remove animation now that it is complete
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    }
 }