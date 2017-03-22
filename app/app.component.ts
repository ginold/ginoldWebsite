import { Component, AfterViewInit } from '@angular/core';
import { MainCtrl } from './mainCtrl';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: '../templates/appRoot.html',
  inputs: ['color']
})
export class AppComponent { 
	age: number;
	showHobbies: boolean = false;
	myJson: Object = JSON;
	name: string;
	mainCtrl: MainCtrl;
	after:number = 1233;


	hobbies: Object = {
		favorite: 'piano'
	};


	constructor(mainCtrl: MainCtrl) {
		this.name = 'Adam';
		this.mainCtrl = mainCtrl;
		console.log(this);
	}

	//called after the constructor and called  after the first ngOnChanges() 
	ngAfterViewInit(){
		this._initSemantic();
	}

	private _initSemantic():void {
		$('.dropdown').dropdown();
    $('.flag').popup(); // tooltip
    $('.ui.accordion').accordion();
    $('.main.menu').visibility({type: 'fixed'}); // sticky menu
    $('.cards').visibility({ // cards flip when in viewport
			offset: 100,
			onTopVisible: function() {
				$('.card').transition({animation: 'pulse', duration: '200', interval: 100});
			}
		});
		$('.menu .item').tab();
	}

	public openMenu():void {
		$('.ui.labeled.icon.sidebar').sidebar('toggle');
	}

	public showHobbiesFunc():void {
		this.showHobbies = !this.showHobbies;
		this.name = this.mainCtrl.VAR1;
	}
}

