import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Observable } from 'rxjs/Observable';

//Native
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class SavevalueProvider {
  
  val: object;
  

  constructor(public http: HttpClient, 
    private spinnerDialog: SpinnerDialog,
    private nativeStorage: NativeStorage
  ) {
    
    
  }
  

  savebody(elem,elem1){
  const donnee = {value: elem, part: elem1};
  const url = 'http://bmyscouter.co/db/mobile/test2.php';

  console.log(donnee);
  this.http
  .post(url, donnee, {responseType: 'text'})
  .subscribe(
    (val) => {
      console.log("POST call successful value returned in body", 
                  val);
                             
  },
  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
});


}


getbody(page) : any {
  this.spinnerDialog.show();
  
  
  this.http.get('http://bmyscouter.co/db/mobile/test.php').subscribe(
    data => {
      
     page.values = data;
     this.spinnerDialog.hide();
     console.log(page.values);
     page.show = true;
    },

    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        this.spinnerDialog.hide();
        console.log('An error occurred:', err.error.message);
      } else {
        this.spinnerDialog.hide()
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    }
); 

}

getval(page, elem) : any {
  var i;
  const length = elem.length;
  const donnee = elem;
  const url = 'http://bmyscouter.co/db/mobile/test3.php';

  this.http
  .post(url, donnee).subscribe(
    (val) => {
      page.values = val;    
    },

  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
});
}

getsettings(page, elem) : any {
  const donnee = elem;
  const url = 'http://bmyscouter.co/db/mobile/test3.php';

  this.http.post(url, donnee).subscribe(
    (val) => {
      page.values = val;    
      console.log(page.values);
      page.user_first = val[0].user_first;
      page.user_last = val[1].user_last;
      page.myPhone = val[2].user_phone;
      page.myMail = val[3].user_email;
      page.myUnity = val[4].user_unity;
      page.myDate = val[5].user_birthday;
    },

  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
});
}

saveImage(elem,elem1,elem2){
  let url = 'http://bmyscouter.co/db/mobile/getImage.php';

  let postData = new FormData();
  postData.append('file', elem);
  postData.append('userid', elem1);
  postData.append('type', elem2);

  console.log('envoi');
  let data:Observable<any> = this.http.post(url, postData);
  return data.map((result => {
    console.log(result);
    return result;
  }));
}






getProfile<Observable>() {
  const elem = 'test';
  const url = 'http://bmyscouter.co/db/mobile/getMeasurements.php';

   return this.http.post(url, elem).map(
    profile => {
     console.log(profile[0]);
      return profile[0];
    })
}


}
