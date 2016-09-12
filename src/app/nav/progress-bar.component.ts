import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'progress-bar',
    templateUrl: 'progress-bar.component.html'
})
export class ProgressBarComponent implements OnInit {
    public now: number = 0;
    public min: number = 0;
    public max: number = 1000;
    private _interval: any;

    ngOnDestroy(): void {
        // Stop the client side processing
        clearInterval(this._interval);
    }

    ngOnInit(): void {
        // Animate the progress bar every 100 milliseconds
        let _this = this;
        this._interval = setInterval(function () {
            _this.now++;
            if (_this.now > _this.max) {
                // Start over
                _this.now = _this.min;
            }
        }, 100);
    }

}
