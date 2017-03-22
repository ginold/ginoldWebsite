import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { MainCtrl }   from './mainCtrl';
import { AppComponent }  from './app.component';
import { UserProfile } from './app.userProfile';
import { ProjectCards } from './app.projectCards';
import { Sidemenu } from './app.sidemenu';
import { Mainmenu } from './app.mainmenu';
import { AboutMe } from './app.aboutMe';
import { Education } from './education/app.education';
import { Myself } from './myself/app.myself';
import { WorkingExperience } from './working/working';


@NgModule({
  imports:      [ BrowserModule, FormsModule  ], // FormsModule  ngmodel
  declarations: [ AppComponent, UserProfile, ProjectCards, Sidemenu,
  	AboutMe, Mainmenu, Education, Myself, WorkingExperience ],
  providers: [ MainCtrl ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
