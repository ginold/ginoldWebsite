import { Component } from '@angular/core';
import { MainCtrl } from './mainCtrl';

@Component({
  selector: 'sidemenu',
  templateUrl: '../templates/sidemenu.html',
})
export class Sidemenu {
	menus: Array<Object>;

	constructor(mainCtrl: MainCtrl){
		this.menus = mainCtrl.mainMenu;
	}
}