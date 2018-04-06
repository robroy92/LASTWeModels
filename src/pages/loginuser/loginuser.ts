import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthuserProvider } from '../../providers/authuser/authuser';

import { TabsPage } from '../tabs/tabs';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Camera, CameraOptions  } from '@ionic-native/camera';

import { User } from '../../models/User/user';

import { Observable } from 'rxjs/Observable';

import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-loginuser',
  templateUrl: 'loginuser.html',
})
export class LoginuserPage {

  registerCredentials : any = {};
  userData: any;
  user = {} as User;
  answer : any;
  status: string ='';
  erreur: string = '';
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthuserProvider,
    private facebook: Facebook, 
    private camera: Camera,
    private spinnerDialog : SpinnerDialog,
    private alertCtrl: AlertController,
    private nativeStorage: NativeStorage
  ) {

  }

  public login() {
      this.spinnerDialog.show();
      this.auth.login(this ,this.user.email, this.user.password).subscribe(result => {
        this.answer = result;
        if(this.answer.status == 'OK'){
          console.log(this.answer.uid);
          this.navCtrl.setRoot(TabsPage);
          this.nativeStorage.setItem('uid', this.answer.uid)
         .then(
         () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
          );
        } else {
          this.spinnerDialog.hide();
          this.presentAlert(this.answer.status)
          console.log('NONONO');
        }
      }); 
    
      }
  

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,last_name,gender,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], gender: profile['gender'], picture: profile['picture_large']['data']['url'], username: profile['name']}
        console.log(this.userData);
      });
    });
    
  }
  GetCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  presentAlert(elem) {
    let alert = this.alertCtrl.create({
      title: 'Echec de la connexion',
      subTitle: elem,
      buttons:  ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginuserPage');
  }

}
