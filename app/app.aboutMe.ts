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
		// this.tabs = [
		// 	{title: 'Me, myself & I', color: 'red', id: 'myself', icon: 'child'},
		// 	{title: 'What I\'ve learned', color: 'purple', id: 'education', icon: 'student'},
		// 	{title: 'Where I\'ve worked', color: 'yellow', id: 'experience', icon: 'bar'},
		// 	{title: 'What I know', color: 'teal', id: 'competences', icon: 'puzzle'}
		// ];
		this.progLangs = [
			{title: 'Android', value: 0.35, img: 'android.png'},
			{title: 'HTML, CSS', value: 0.85, img: 'html.png'},
			{title: 'Angular', value: 0.90, img: 'angular.png'},
			{title: 'Photoshop', value: 0.5, img: 'photoshop.svg'},
			{title: 'After Effects', value: 0.85, img: 'after_effects.svg'},
			{title: 'Premiere', value: 0.90, img: 'premiere.svg'},
			{title: 'Fruity Loops', value: 0.5, img: 'fl.jpg'}
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

	ngAfterViewInit(): void {
		$('.programming-item').on('mouseenter', function(e){
			var progressCircle = $(e.currentTarget).find('.progress-circle');
			var container = $(e.currentTarget).find('.programming-title-container');
			var fullId = progressCircle.attr('id');
			var id = parseInt(fullId[fullId.length - 1]);
			var circleExists = progressCircle.find('.progressbar-text');
			var value = this.progLangs[id].value;

			if(!circleExists.length) {
				$(progressCircle).addClass('show-circle');
				$(container).addClass('show-circle'); // doesn't work if on the same line

				var bar = new ProgressBar.Circle('#' + fullId, {
				  strokeWidth: 4, easing: 'easeInOut', duration: 1400,
				  from: { color: '#aaa', width: 1 },
				  to: { color: '#333', width: 4 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);
				    circle.setText(Math.round(circle.value() * 100); + '%');
				  }
				});
				bar.animate(value); // Number from 0.0 to 1.0
			}
		}.bind(this))
	}


	selectTab(tab: string) {
		$('.tab-content, .tab-content.visible.transition').removeClass('visible transition').hide();
		$('#' + tab).transition('fade left');


		$('.fadeUpCircle').transition({
			animation : 'fade up',
			duration  : 400,
			interval  : 100
		});
	}
}