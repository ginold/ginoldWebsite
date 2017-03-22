import { Component } from '@angular/core';
import { MainCtrl } from '../mainCtrl';

declare var $: any;


@Component({
  selector: 'myself',
  templateUrl: 'app/myself/myself.html'
})
export class Myself {
	public ob: string; //openBrace
	public cb: string; //closeBrace

	constructor(){
		this.ob = '{';
		this.cb = '}';
	}
} 
