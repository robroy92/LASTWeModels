import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { EventApiGlobal } from '../../assets/models/eventapi-global-model';
import { EventapiProvider } from '../../providers/eventapi/eventapi';

import { ModalController, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  userData: any;
  //news: EventApiGlobal = new EventApiGlobal();
  news: any ;
  title: string = 'Upcoming Events';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private nativePageTransitions: NativePageTransitions, 
    private eventapiProvider:EventapiProvider, 
    public modalCtrl: ModalController,
  ) {
    
    this.eventapiProvider.getArticles()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);
    })
  }

  ionViewWillEnter() {
    this.updatenews();
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

   let options2: NativeTransitionOptions = {
    direction: 'up',
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

  presentModal(elem) {
    var lien = elem;
    let modal = this.modalCtrl.create(lien);
    modal.present();
  }

  updatenews(){
    this.eventapiProvider.getArticles()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);
    });
  }

}
