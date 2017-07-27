import { Injectable } from '@angular/core';
import { User } from "../models/User"
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) {

  }

  getCurrent(): Promise < User > {
    return this.http.get('/ajax/user').toPromise()
      .then(response => response.json() as User);
  }

  logout(): Promise < any > {
    return this.http.post('/logout', {}).toPromise().then();
  }


}
