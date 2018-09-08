import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class RedditService {
  http: any;
  url: string;
  constructor(http: Http) {
    this.http = http;
    this.url = 'https://www.reddit.com/r';
  }
  getPosts(category, limit) {
    return this.http.get(this.url + '/' + category + '/top.json?limit=' + limit)
      .map(res => res.json());
  }
}