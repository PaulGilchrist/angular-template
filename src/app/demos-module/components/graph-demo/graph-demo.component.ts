import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
	selector: 'app-graph-demo',
	styleUrls: ['./graph-demo.component.css'],
	templateUrl: './graph-demo.component.html'
})
export class GraphDemoComponent implements OnInit, OnDestroy {
	// object is not limited to just x and y columns
	data: Array<any> = [
		{ month:'2015-01', sales:100 },
		{ month:'2015-02', sales:130 },
		{ month:'2015-03', sales:170 },
		{ month:'2015-04', sales:220 },
		{ month:'2015-05', sales:280 },
		{ month:'2015-06', sales:300 },
		{ month:'2015-07', sales:270 },
		{ month:'2015-08', sales:230 },
		{ month:'2015-09', sales:180 },
		{ month:'2015-10', sales:140 },
		{ month:'2015-11', sales:120 },
		{ month:'2015-12', sales:130 }
	];

	// For styling graphs and charts, make sure to look at the CSS file options

	height = 300;
	labels: Array<string> = ['none', 'all', 'minmax'];
	label = 'minmax';
	warningLevel = 250;
	width = 350;

	private sub: any;

	constructor(private _route: ActivatedRoute, private _router: Router) { }

	ngOnInit(): void {
		// window['appInsights'].trackPageView('demos-module/graph-demo.component');
		// Pass as params (graph;warningLevel=25) or as queryString (graph?warningLevel=25)
		// this.sub = this._router.routerState.queryParams.subscribe(params => {
		this.sub = this._route.params.subscribe(params => {
			// Allow the user to pass a querystring that overrides the default graph options
			const height: number = +params['height']; // (+) converts string 'id' to a number
			if(height) {
				this.height = height;
			}
			const width: number = +params['width'];
			if(width) {
				this.width = width;
			}
			const label: string = params['label'];
			if(label) {
				this.label = label;
			}
			const warningLevel: number = +params['warningLevel'];
			if(warningLevel) {
				this.warningLevel = warningLevel;
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	onUpdateLabel(event: any): void {
		// Only the value roles up to the parent select.  To get the label you have to go to the selected option
		this.label = event.target.value;
	}

}
