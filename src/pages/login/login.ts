import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController  } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Camera, CameraOptions  } from '@ionic-native/camera';

import { NativeStorage } from '@ionic-native/native-storage';
//import { Img } from 'ionic-angular/components/img/img-interface';
import { ImagePicker } from '@ionic-native/image-picker';
import { SavevalueProvider } from '../../providers/savevalue/savevalue' ;


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any;
  path: string;
  option: any;
  imageData : any;
  title: string = 'Pictures';
  pictures: string;
  public photos : any =[];
  base64Image: string;
  log : any = [];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private nativePageTransitions: NativePageTransitions,
    private modalCtrl: ModalController,
    private camera: Camera,
    private nativeStorage: NativeStorage,
    private imagePicker: ImagePicker,
    public savepic: SavevalueProvider, 
  ) 
  {
   this.pictures= 'portrait';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
   // this.GetPicture()
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

  presentModal(elem) {
    //var lien = elem+'Page';
    let modal = this.modalCtrl.create(elem);
    modal.present();
  }


  GetCamera2(){
    const options: CameraOptions = {
      quality: 70,
      targetWidth: 1024,
    //  allowEdit : true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.save(this.base64Image);
     this.photos.push(this.base64Image);
     this.photos.reverse();
    // this.nativeStorage.setItem('picture', base64Image)
    }, (err) => {
    });
  }

  save(elem){
    this.savepic.saveImage(elem).subscribe(
      (picture)=> {
       this.log = picture;
      }
    );
  }


  GetPics(){
    let options = {
      maximumImagesCount: 5};

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
  
}




