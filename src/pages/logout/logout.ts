import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogOutPage implements OnInit {

  constructor(public navCtrl: NavController) {

  }
ngOnInit(){
  this.navCtrl.popToRoot();
}
}
