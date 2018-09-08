import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { NgForm } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('f') form: NgForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }
  goto() {
    const password = this.form.value.password;
    const username = this.form.value.username;
    console.log('Username and password ' + username + ' ' + password)
    //const testpass = this.registerService.getUser();
    if (username == 'Mobiquityinc' && password == 'mobiquity') {
      this.navCtrl.push(TabsPage);
      this.presentLoading();
      this.form.reset();

    } else {
      this.showAlert();
    }
  }
  onSubmit() { }
  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Invalid User',
      buttons: ['OK']
    });
    alert.present();
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
}
