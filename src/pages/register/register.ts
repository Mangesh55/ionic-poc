import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,
  AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {UserService} from '../services/user';
import {User} from '../data/user.interface';
import { FormControl } from "@angular/forms";
import {LoginService} from '../services/login';
import {LoginPage} from '../login/login';
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('f') form: NgForm;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: LoginService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public userService: UserService
  ) {
  }
  user: User = {
    email: "",
    password: ""
  };
  signInLoading = this.loadingCtrl.create({
    content: "Wait few seconds.."
  });
  signUpLoading = this.loadingCtrl.create({
    content: "Wait Signing up..."
  });
  registrationDoneAlert = this.alertCtrl.create({
    title: "Registration Done",
    message: "User Registration Done.Now you can login.",
    buttons: ["Ok"]
  });
  registrationFailedAlert = this.alertCtrl.create({
    title: "Signup failed!",
    buttons: ["Ok"]
  });
  
  onSubmit(form: FormControl) {

    this.authService
      .signUp(form.value.username,form.value.password)
      .then(() => { this.signUpLoading.dismiss();
        this.navCtrl.push(LoginPage);
      })
      .catch(error => {
        this.signUpLoading.dismiss();
        this.registrationFailedAlert.setMessage(error.message);
        this.registrationFailedAlert.present();
      });
  }
}
