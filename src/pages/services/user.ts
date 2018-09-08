import { Injectable } from "@angular/core";
@Injectable()
export class UserService {
  currentUser;
  constructor() {}
  setCurrentUser(user) {
    this.currentUser = user;
  }
}
