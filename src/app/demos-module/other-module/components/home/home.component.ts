import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './../../react/tic-tac-toe/game'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit , OnDestroy {

    @ViewChild('reactContainer') containerRef: ElementRef;

    _modalActive = false;

    ngAfterViewInit() {
        // Render the React component and pass data to it from Angular
        ReactDOM.render(React.createElement(Game, {message: 'React know any data passed in from Angular', logGameWinner: this.logGameWinner}), this.containerRef.nativeElement);
    }

    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }

    logGameWinner(winner) {
        // Demo communication between React back to Angular
        console.log(`Angular knows any data retruned from React including the winner: ${winner}`);
    }

    viewModal(): void {
        this._modalActive = true;
    }

}
