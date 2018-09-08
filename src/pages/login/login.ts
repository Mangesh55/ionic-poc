import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import firebase from "firebase";
import { FormControl } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { User } from '../data/user.interface';
import { LoginService } from '../services/login'
import { UserService } from '../services/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  user: User = {
    email: "",
    password: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, private loginService: LoginService, private userService: UserService) {
  }

  signInLoading = this.loadingCtrl.create({
    content: "Just a few seconds..."
  });
  signInFailAlert = this.alertCtrl.create({
    title: "Signin failed!",
    subTitle: "Invalid Username or Password",
    buttons: ["Ok"]
  });

  onSubmit(form: FormControl) {

    this.signInLoading.present();
    this.loginService.signin(form.value.username,form.value.password).then(data => {
      this.signInLoading.dismiss();
      this.navCtrl.push(TabsPage);
      form.reset();
    }).catch(error => {
      this.signInLoading.dismiss();

    });
  }
  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }
}