import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('f') form: NgForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private registerService: RegisterService
  ) {
  }
  goto() {
    console.log(this.form.value.password);
    this.navCtrl.popToRoot();
  }
  onSubmit() {
    this.registerService.registerUser(this.form.value.username, this.form.value.password);
  }
}
