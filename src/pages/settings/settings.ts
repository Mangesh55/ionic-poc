import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { AboutappPage } from '../aboutapp/aboutapp';
import { RedditService } from '../services/reddit';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.setDefaultProps();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  gotoReset() {
    this.navCtrl.push(ResetpasswordPage);
  }
  gotoAbout() {
    this.navCtrl.push(AboutappPage);
  }
  saveChanges(){

    localStorage.setItem('category',this.category);
  localStorage.setItem('limit',this.limit);
  console.log(this.limit);
console.log(this.category);
  
  this.navCtrl.push(HomePage);
  }
  setDefaultProps(){
  
  }
}
