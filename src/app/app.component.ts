import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { RootPage } from '../pages/root/root';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RootPage;
// A change have been here : rootPage:any = TabsPage;
 

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private nativeStorage: NativeStorage,
  ) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      console.log('test');
    });
  }


}
