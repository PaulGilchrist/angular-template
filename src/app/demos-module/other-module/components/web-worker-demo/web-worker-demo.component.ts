import { Component } from '@angular/core';

import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-web-worker-demo',
    styleUrls: ['./web-worker-demo.component.css'],
    templateUrl: './web-worker-demo.component.html'
})
export class WebWorkerDemoComponent {

    primeNumber = 0;

    constructor(public stateService: StateService) {}

    calculatePrimes() {
        // Demo showing calculating primes without blocking UI
        if (typeof Worker !== 'undefined') {
            this.stateService.state.worker = new Worker(new URL('../../services/demo.worker', import.meta.url), { type: 'module' });
            this.stateService.state.workerStatus = 'running';
            this.stateService.state.worker.onmessage = ({ data }) => {
                if (data.primeNumber) {
                    this.primeNumber = data.primeNumber;
                    console.log(this.primeNumber);
                }
                if (data.message) {
                    console.log(data.message);
                }
            };
            this.stateService.state.worker.postMessage({action: 'start', max: 1000000, min: 0});
        } else {
        // Web Workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
        }
    }

    pauseWorker() {
        this.stateService.state.worker.postMessage({action: 'pause'});
        this.stateService.state.workerStatus = 'paused';
    }

    resumeWorker() {
        this.stateService.state.worker.postMessage({action: 'resume'});
        this.stateService.state.workerStatus = 'running';
    }

    terminateWorker() {
        this.stateService.state.worker.terminate();
        this.stateService.state.workerStatus = 'stopped';
        console.log('Calculation of primes terminated by the user');
    }

}
