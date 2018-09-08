import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {LogOutPage} from '../pages/logout/logout';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginService} from '../pages/services/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RedditService } from '../pages/services/reddit';
import {RegisterPage} from '../pages/register/register';
import { RegisterService } from '../pages/services/register';
import { HttpModule } from '@angular/http';
import { StatusPage } from '../pages/status/status';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import {SettingsPage} from '../pages/settings/settings';
import {UserService} from '../pages/services/user';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    StatusPage,
    ResetpasswordPage,
    AboutappPage,
    SettingsPage,
    LogOutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    StatusPage,
    ResetpasswordPage,
    AboutappPage,
    SettingsPage,
    LogOutPage
  ],
  providers: [
    StatusBar,
    RedditService,
    SplashScreen,
    RegisterService,
    LoginService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
