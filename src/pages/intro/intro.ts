import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsComponent} from "../tabs/tabs";

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public nav:NavController) {}

  goToHome(){
        this.nav.setRoot(TabsComponent);
    }
}
