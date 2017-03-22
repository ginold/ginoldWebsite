import { Component } from '@angular/core';

declare var $: any;

@Component({
	selector: 'education',
	templateUrl: 'app/education/education.html',
})
export class Education {
	readonly educations: Array<Object>;

	constructor() {
		this.educations = [
			{type: 'HEIG', icon: 'student', date: 'September 2012 - 2015', description: 'Bachelor of Science in Media Engineering at Haute Ecole d\'Ingénierie et de Gestion' +
			' (University of Applied Sciences in Western Switzerland), Yverdon, Switzerland. Final Bachelor Thesis note: 5.3 out of 6'},
			{type: 'SAE', icon: 'film', date: 'September 2010 - 2012', description: 'Digital Film & Animation Diploma at School of Audio Engineers, Geneva, Switzerland'},
			{type: 'Champittet', icon: 'book', date: 'February 2004 - July 2010', description: 'Middle and High school with swiss Maturity Exam at Collège Champittet, Pully.'},
			{type: 'Primary School', icon: 'child', date: 'September 1997 - 2003', description: 'Primary School in Katowice, Poland'},
		];
	}

	ngAfterViewInit(): void {
		$('#cd-timeline .cd-timeline-block').visibility({
			offset: 150,
			onBottomVisible: function() {
				$(this).transition('scale', '500ms');
			}
		})    
	}
}