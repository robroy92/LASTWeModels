import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Native
//import { NativeStorage } from '@ionic-native/native-storage';


import { TabsPage } from '../../pages/tabs/tabs';


import 'rxjs/add/operator/map';

export class User {
  email: string;
  password: string;

  constructor(email: string, password: string){
    this.email = '';
    this.password = '';
  }
}


@Injectable()

export class AuthuserProvider {
  
  constructor(
  private http: HttpClient,
)
{

  }

  currentUser: User;
  url: string = 'http://bmyscouter.co/db/mobile/login.php';

  public login<Observable>(page, Username: string, Password: string){
  console.log('credentials',Username, Password);
  return  this.http.post(this.url, {username: Username, password: Password} )
    .map( response => {
      return response;
    }
      
   ); 
  };
    



}
