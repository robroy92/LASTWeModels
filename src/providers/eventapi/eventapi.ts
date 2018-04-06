import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EventApiGlobal } from '../../assets/models/eventapi-global-model'

@Injectable()
export class EventapiProvider {

  constructor(public http: HttpClient) {
        console.log('Hello EventapiProvider Provider');
  }

  public getArticles(): any {
  
      const url = 'http://bmyscouter.co/db/events.php';

    return this.http.get(url)
    .toPromise()
    .then(response => response as EventApiGlobal)
    .catch (error => console.log('erreur'+ error))

  }


}
