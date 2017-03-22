import { Component } from '@angular/core';
import { MainCtrl } from '../mainCtrl';

declare var $: any;


@Component({
	selector: 'working-experience',
	templateUrl: 'app/working/working.html'
})
export class WorkingExperience {
	readonly works: Array<Object>;

	constructor() {
		this.works = [
		{ title: 'NagraVision Kudelski', duration: '1.5 years', width: 35, color: 'red'},
		{ title: 'Okay Ad Agency', duration: '1 month', width: 10, color: 'green'},
		{ title: 'Mahogany Hall',  duration: '1 month', width: 10, color: 'yellow' },
		{ title: 'Vélocité sàrl', duration: '4 months', width: 15, color: 'purple'},
		{ title: 'Camptocamp SA', duration: '1 year', width: 30, color: 'orange'}

		];
	}
}