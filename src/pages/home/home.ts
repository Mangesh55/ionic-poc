import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../services/reddit';
import { StatusPage } from '../status/status';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  status = StatusPage;
  src = "https://i.redditmedia.com/-JKmTHyE01rs3rPlvl00ftpKNrUBvW4yt4yCjlJEZc0.jpg?s=9fad89cb24dff1e54d696eaa9bea453b";
  items = [];
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) { }
  ngOnInit() {
    this.defaultCategory();
    this.getPost(this.category, this.limit);
  }
  getPost(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(res => {
      this.items = res.data.children;
      console.log(this.items);
    });
  }
  defaultCategory() {
    this.category = 'sports';
    this.limit = 10;
  }
  changeCategory() {
    this.getPost(this.category, this.limit);
  }
}
