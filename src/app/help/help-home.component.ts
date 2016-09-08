import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
    selector: 'help-home',
    templateUrl: 'app/help/help-home.component.html'
})
export class HelpHomeComponent implements OnInit, OnDestroy {

    private sub: any;

    constructor(private _route: ActivatedRoute, private _router: Router) { }

    ngOnInit(): void {
        /*
        *  Passing as ActivatedRoute params is not working because they are being passed to the parent
        *       due to how the default child route is part of the parent route, so we will use standard queryString
        */
        //this.sub = this._route.params.subscribe(params => {
        this.sub = this._router.routerState.root.queryParams.subscribe(params => {
            let id = params['id'];
            if(id) {
                //Bring the id seleted into view
                $('#' + id)[0].scrollIntoView();
                //Adjust for the fact that we have a fixed 60px height top nav when scrolled or 80px when at top of page ("gettingStarted" section)
                var scrollOffset = -60;
                if(id=='gettingStarted') scrollOffset = -80;
                window.scrollBy(0,scrollOffset);
            }
        });
    }

    ngOnDestroy() {
	    this.sub.unsubscribe();
        window.scrollBy(0,-60);
    }

}