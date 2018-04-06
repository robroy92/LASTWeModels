import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { CreatePage } from '../create/create';
import { TabsPage } from '../tabs/tabs';

import { ModalController, ViewController  } from 'ionic-angular';

//import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {

  tabBarElement: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private nativePageTransitions:NativePageTransitions,
  //  private splashScreen: SplashScreen,
    public platform : Platform,
    private nativeStorage: NativeStorage
  ) {
  
  }


  ionViewWillEnter() {
    this.GetStorage();
  if(this.tabBarElement = document.querySelector('.tabbar.show-tabbar')){
    this.tabBarElement.style.display = 'none';
  }  else {}
 
  }
  

  ionViewDidLoad(){
   // this.splashScreen.show();
   // this.platform.ready().then(() => {
   //  this.splashScreen.hide();
   // });
  }

  ionViewWillLeave() {
  //  this.tabBarElement.style.display = 'flex';
  }

  openPage(page, elem) {
    console.log(elem);
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
  
  
    this.nativePageTransitions.slide(elem);
    this.navCtrl.push(page);
  
  }

  GetStorage(){
   this.nativeStorage.getItem('uid')
  .then(
    data => {
      console.log('data' , data)
      if (data){
        console.log('logé')
        this.navCtrl.setRoot(TabsPage);
      }else{
        console.log('pas logé');
      }
    },
    error => console.error('error', error)
  );
}

 




}
