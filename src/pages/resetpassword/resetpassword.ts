import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }
  gotoRoot() {
    // this.app.getActiveNav().popToRoot();
    this.navCtrl.push(LoginPage);
  }
}
