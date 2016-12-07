import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ControlPanelComponent} from "../controlpanel/controlpanel";

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  constructor(public navCtrl: NavController) {}

   tab1Root: any = ControlPanelComponent;

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
