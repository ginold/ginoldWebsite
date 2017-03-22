import { Component } from '@angular/core';
import { MainCtrl } from './mainCtrl';
import {DomSanitizer} from '@angular/platform-browser';

declare var $: any;

@Component({
	selector: 'project-cards',
	templateUrl: '../templates/projectCards.html',
})
export class ProjectCards {
	readonly projects: Array<Object>;
	private sanitizer: DomSanitizer;
	private mainCtrl: MainCtrl;

	constructor(sanitizer: DomSanitizer, mainCtrl: MainCtrl){
		this.sanitizer = sanitizer;
		this.mainCtrl = mainCtrl;
		this.projects = [
		{
			where: 'Camptocamp, Lausanne',
			what: 'Camptocamp.org',
			description: 'renewing c2c',
			when: '2016',
			position: 'front-end developer',
			img: 'c2c.jpg'
		},
		{
			where: 'Camptocamp, Lausanne',
			what: 'Plan EPFL',
			description: 'renewing the EPFL Plan website',
			when: '2016',
			position: 'front-end  developer, CSS',
			img: 'epfl.jpg'
		},
		{
			where: 'HEIG, Yverdon',
			what: 'Event Manager',
			description: 'mahogany hall manager',
			when: '2014',
			position: 'front-end developer',
			img: 'mahogany.png'
		},
		{
			where: 'Velocite, Lausanne',
			what: 'Coursiers Manager',
			description: 'bachelor thesis',
			when: '2015',
			position: 'full-stack developer',
			img: 'velocite.jpg'
		}
		]
	}

	getImgUrl(url: string) {
		return this.sanitizer.bypassSecurityTrustStyle('url(' + this.mainCtrl.baseUrl + url + ')');
	}
}