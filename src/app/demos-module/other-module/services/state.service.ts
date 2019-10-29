import { Injectable } from '@angular/core';

import { State } from './../models/state.model';

@Injectable()
export class StateService {

    public state: State;

    constructor() {
        this.state = {
            worker: null,
            workerStatus: 'stopped'
        };
    }
}
