import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewController  } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SavevalueProvider } from '../../providers/savevalue/savevalue' ;
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-setmeasure',
  templateUrl: 'setmeasure.html',
})
export class SetmeasurePage {

  title: string;
  valeur: string;
  part: string;
  url: string;
  options: any= [];

  variants: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public viewCtrl: ViewController, 
    private http: HttpClient, 
    public saveval: SavevalueProvider
   ) {

    this.part = this.navParams.get('part');
    this.valeur = this.navParams.get('valeur');
    this.url = this.navParams.get('url');
    this.title = this.navParams.get('name');
    this.options = this.navParams.get('options');
  }

  ionViewDidLoad() {

    console.log('Part', this.part);
    console.log('Value', this.valeur);
    console.log('Url', this.url);
    console.log('options', this.options);
  }

  dismiss(data) {
  //  console.log(data);
    this.viewCtrl.dismiss(data);
  }


  save(elem,elem1){
    let data  = {elem,elem1};
    this.saveval.savebody(elem,elem1);
    this.dismiss(data);
  }

  selected(elem){
    console.log(elem);
  }


}
