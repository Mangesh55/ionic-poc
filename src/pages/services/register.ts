import { Injectable } from "@angular/core";

@Injectable()
export class RegisterService {
  login = [];


  getUser() {
    return this.login;
  }
  registerUser(name: string, password: string) {

    this.login.push(name, password);
    console.log(this.login);
  }
}