import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ContactmethodPage } from '../contactmethod/contactmethod';
import { WorkingareaPage } from '../workingarea/workingarea';

import { SavevalueProvider } from '../../providers/savevalue/savevalue' ;
import { RootPage } from '../root/root';

import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  tabBarElement: any;
  options: any;
  options2: any;
  user_first: string = '';
  user_last: string = '' ;
  myDate: string = '';
  myPhone: string = '';
  myMail : string = '';
  myUnity : string = '';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private savevalue : SavevalueProvider, 
    private nativePageTransitions: NativePageTransitions,
    private alertCtrl: AlertController,
    private nativeStorage: NativeStorage
  ) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
         
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
    this.savevalue.getsettings(this, ['user_first', 'user_last', 'user_phone', 'user_email', 'user_unity', 'user_birthday']);

  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  openPage(page : any) {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.push(ContactmethodPage);
  }


  openPage1(page : any) {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.push(WorkingareaPage);
  }

  openPage2() {
    let options2: NativeTransitionOptions = {
      direction: 'flip',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
    this.nativePageTransitions.slide(options2);
    this.navCtrl.push(RootPage);
  }

 updatevalue(elem,elem1){
    this.savevalue.savebody(elem,elem1);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Disconnect',
      message: 'Do you want to confirm ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.nativeStorage.remove('uid');
            this.openPage2();
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  

  goDisconnect(){
    this.presentConfirm() 
  }
}