import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {  ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-application',
  templateUrl: 'application.html',
})
export class ApplicationPage {

  title: string = 'Application Policy';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController, 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationPage');
  }

  dismiss(data) {
    console.log(data);
    this.viewCtrl.dismiss(data);
  }



}
