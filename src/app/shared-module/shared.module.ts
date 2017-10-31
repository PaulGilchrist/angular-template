import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FilterObjectsPipe } from './pipes/filter-objects.pipe';
import { SortObjectsPipe } from './pipes/sort-objects.pipe';

@NgModule({
	exports: [
		FilterObjectsPipe,
		ProgressBarComponent,
		SortObjectsPipe
	],
	declarations: [
		FilterObjectsPipe,
		ProgressBarComponent,
		SortObjectsPipe
	],
	imports: [
		CommonModule
	],
})
export class SharedModule {}
