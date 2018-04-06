import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';


// Page
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ContactmethodPage } from '../pages/contactmethod/contactmethod';
import { WorkingareaPage } from '../pages/workingarea/workingarea';
import { RootPage } from '../pages/root/root';

// Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Camera } from '@ionic-native/camera';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { NativeStorage } from '@ionic-native/native-storage';

//FB
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SavevalueProvider } from '../providers/savevalue/savevalue';
import { EventapiProvider } from '../providers/eventapi/eventapi';
import { AuthuserProvider } from '../providers/authuser/authuser';
import { ImagePicker } from '@ionic-native/image-picker';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    HomePage,
    ContactmethodPage,
    WorkingareaPage,
    RootPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    HomePage,
    RootPage,
    WorkingareaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Facebook,
    Camera,
    ImagePicker,
    SpinnerDialog,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SavevalueProvider,
    EventapiProvider,
    AuthuserProvider,
    NativeStorage
  ]
})
export class AppModule {}
