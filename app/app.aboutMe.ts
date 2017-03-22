import { Component } from '@angular/core';
import { MainCtrl } from './mainCtrl';

declare var $: any;

@Component({
	selector: 'about-me',
	templateUrl: '../templates/aboutMe.html',
})
export class AboutMe {
	readonly tabs: Array<Object>;
	readonly contents: Array<Object>;
	readonly progLangs: Array<Object>;
	readonly languages: Array<Object>;

	constructor(){
		this.tabs = [
			{title: 'Me, myself & I', color: 'red', id: 'myself', icon: 'child'},
			{title: 'What I\'ve learned', color: 'purple', id: 'education', icon: 'student'},
			{title: 'Where I\'ve worked', color: 'yellow', id: 'experience', icon: 'bar'},
			{title: 'What I know', color: 'teal', id: 'competences', icon: 'puzzle'}
		];
		this.progLangs = [
			{title: 'Android', value: 0.35},
			{title: 'HTML, CSS', value: 0.85},
			{title: 'Angular', value: 0.90},
			{title: 'Photoshop', value: 0.5},
			{title: 'After Effects', value: 0.85},
			{title: 'Premiere', value: 0.90},
			{title: 'Fruity Loops', value: 0.5}
		];
		this.languages = [
			{title: 'polish', value: 0.99, country: 'poland', level: 'C2'},
			{title: 'english', value: 0.85, country: 'gb', level: 'C1'},
			{title: 'french', value: 0.90, country: 'france', level: 'C2'},
			{title: 'german', value: 0.7, country: 'germany', level: 'C1'},
			{title: 'spanish', value: 0.7, country: 'spain', level: 'B2'},
			{title: 'russian', value: 0.2, country: 'russia', level: 'A1'},
		];
	}
	ngOnInit(){
		$(".cd-timeline-content").visibility({ // cards flip when in viewport
		  transition: 'vertical flip in',
		  duration: 500
		});
	}


	selectTab(tab: string) {
		$('.tab-content, .tab-content.visible.transition').removeClass('visible transition').hide();
		$('#' + tab).transition('fade left');

		$('#competences .progress-circle').circleProgress({
			size: 200
		}).on('circle-animation-progress', function(event:any, progress:any, stepValue:any) {
			$(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
		});

		$('.fadeUpCircle').transition({
			animation : 'fade up',
			duration  : 400,
			interval  : 100
		});
	}
}