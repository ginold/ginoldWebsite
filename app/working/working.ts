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
		{ title: 'NagraVision Kudelski', duration: '1.5 years', width: 35, position: 'intern', img: 'nagravision.jpg',
			'description': 'Cable welding, poster design, learning to code, quality control', 'date': 'December 2010 - June 2012'},
		{ title: 'Okay Radio Ad Agency', duration: '1 month', width: 10, position: 'intern', img: 'radio_katowice.png',
			'description': 'Writing ad scenarios', 'date': 'July 2015'},
		{ title: 'Mahogany Hall',  duration: '1 month', width: 10, position: 'front-end developer', img: 'mahogany_small.png',
			'description': 'Developing an Event Managment App', 'date': 'May 2015'},
		{ title: 'Vélocité sàrl', duration: '4 months', width: 15, position: 'full-stack developer', img: 'velocite.png',
			'description': 'Developing a Schedule Manager for administrators and employees', 'date': 'May - September 2015'},
		{ title: 'Camptocamp SA', duration: '1 year', width: 30, position: 'front-end developer', img: 'camptocamp.png',
			'description': 'Developing the new Camptocamp.org website from scratch, EPFL Open Days App', 'date': 'January - December 2016'}

		];
	}
	ngAfterViewInit(): void {

	}
}