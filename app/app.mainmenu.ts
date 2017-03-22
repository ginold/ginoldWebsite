import { Component } from '@angular/core';
import { MainCtrl } from './mainCtrl';

@Component({
  selector: 'main-menu',
  templateUrl: '../templates/mainmenu.html',
})
export class Mainmenu {
	menus: Array<Object>;

	constructor(mainCtrl: MainCtrl){
		this.menus = mainCtrl.mainMenu;
	}
}