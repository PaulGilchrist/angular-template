import { Component, OnInit } from '@angular/core';

import { IdentityService } from './services/identity.service';
import { UserService } from './services/user.service';

declare var $: any;
declare var System: any;
@Component({
    //Even if we nav away from the user page, we want the UserService data to remain so provide at this higher level
    providers: [IdentityService, UserService],
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