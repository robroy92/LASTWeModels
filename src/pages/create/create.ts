import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController, ViewController  } from 'ionic-angular';

import { User } from '../../models/User/user';


@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  user = {} as User

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  presentModal(elem) {
    var lien = elem+'Page';
    let modal = this.modalCtrl.create(lien);
    modal.present();
  }


  catch (e){
    console.error(e);
  }


}
