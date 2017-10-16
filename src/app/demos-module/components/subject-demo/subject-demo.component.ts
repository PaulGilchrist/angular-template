import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'subject-demo',
    styleUrls: ['./subject-demo.component.css'],
    templateUrl: './subject-demo.component.html'
})
export class SubjectDemoComponent implements OnInit, OnDestroy {
	// Although the property "subject" is created in this component, we are simulating how we would detect changes to is if it was created and modified outside of this component
	//     where multiple components and services may be able to modify it and react to one another's changes

	get message() {
		return this.subject.getValue();
	}

	set message(newMessage: string) {
		this.subject.next(newMessage);
	}

	tracker = new Date();

	subject = new BehaviorSubject<string>('');

    ngOnInit() {
		this.subject
	    	.debounceTime(1000)       // Wait 1000ms after each keystroke before considering the message
    	  	.distinctUntilChanged()   // Ignore if next message is same as previous
			.subscribe(value => {
				// Do something everytime subject changes
				this.tracker = new Date();
			});

		this.message = "Hello World!!!";
    }

    ngOnDestroy() {
		this.subject.unsubscribe();
    }

}
