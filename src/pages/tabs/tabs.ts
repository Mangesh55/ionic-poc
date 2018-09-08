import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { LogOutPage } from '../logout/logout';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingsPage;
  tab3Root = LogOutPage;

  constructor(private navCtrl: NavController) {

  }
  myMethod() {
    this.navCtrl.popToRoot();
  }
}
