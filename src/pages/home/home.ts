import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { NgIf } from '@angular/common';

import { ModalController, ViewController  } from 'ionic-angular';
import { SavevalueProvider } from '../../providers/savevalue/savevalue' ;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { SetmeasurePage } from '../../pages/setmeasure/setmeasure' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  values: object;
  element: string;
  show: boolean = false;
  instruction: string;
  test: any;
  title: string = 'Measurements';


  constructor(public navCtrl: NavController,
     public modalCtrl: ModalController,  
    public viewCtrl: ViewController, 
    private http: HttpClient, 
    public getval: SavevalueProvider, 
    private nativePageTransitions: NativePageTransitions,
    public loadingCtrl: LoadingController, 
    public navParams: NavParams
  ) {
this.instruction = 'Fill Your Measurements';

  } // End Constructor

  ionViewWillEnter() {
    this.show = false;
    this.getval.getbody(this);
  }

  ionViewWillLeave() {
  }

  presentModal(elem, elem1, elem2, elem3, elem4, elem5) {
    console.log(elem1, elem2, elem3, elem4, elem5);
    var lien = elem+'Page';
    let modal = this.modalCtrl.create(elem, { part: elem1, valeur: elem2, url: elem3, name: elem4, options: elem5});
    modal.present();
  }

  openPage(page) {
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
  
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(page);
  
  }


} // End Class