import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from './../pages/intro/intro';
import { UserdataProvider } from './../providers/userdata/userdata';


@Component({
  templateUrl: 'app.html',
  providers: [
    UserdataProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userdataProvider: UserdataProvider) {
    platform.ready().then(() => {
      let config = userdataProvider.getConfigData();
      if(config === null) {
        this.rootPage = IntroPage;
        userdataProvider.setConfigData(false, 'alexandre');
      }else{
        this.rootPage = TabsPage;
      }console.log(config);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
