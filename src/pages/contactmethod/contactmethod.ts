import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavevalueProvider } from '../../providers/savevalue/savevalue' ;


@IonicPage()
@Component({
  selector: 'page-contactmethod',
  templateUrl: 'contactmethod.html',
})



export class ContactmethodPage {

  ContactMail: boolean;
  ContactPhone: boolean;
  Contactinternalmail: boolean;
  title: string = 'Contact Method';
 // height: number = 0;
 // parametres : object [];
 // user_height: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private savevalue: SavevalueProvider ) {
  this.ContactMail = true;
  this.ContactPhone = true;
  this.Contactinternalmail = true;

  }

  ionViewDidEnter() {
  //  this.savevalue.getsettings(this, ['user_height', 'user_waist', 'user_chest']);
    
 }
  
  ionViewDidLoad() {
    
  }


}
