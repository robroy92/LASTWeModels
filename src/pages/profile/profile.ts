import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewController  } from 'ionic-angular';

import { SavevalueProvider } from '../../providers/savevalue/savevalue' ;


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  title: string;
  id: number = 1;
  user_height: number = 0;
  user_hips: number = 0;
  user_profile: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private get: SavevalueProvider,
  ) {
    this.title = "My Profile";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewWillEnter() {
  this.get.getProfile().subscribe(
    (profile) => {
      this.user_profile = profile;
      console.log(this.user_profile);
      this.user_height = this.user_profile.user_height; 
      this.user_hips = this.user_profile.user_hips; 
      console.log(this.user_height);
    }
  );
 

}

}
