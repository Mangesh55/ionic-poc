import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage implements OnInit {
  item: any
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  readFull() {
    console.log(this.item.url);
    return this.item.url;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  ngOnInit() {
    this.item = this.navParams.data;
    console.log(this.item);
  }
}
