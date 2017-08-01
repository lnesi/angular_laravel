import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getAll(): Promise < User[] > {
    return this.http.get("/ajax/admin/users").toPromise().then(response => response.json() as User[]);
  }

  delete(id): Promise < any > {
    return this.http.delete("/ajax/admin/users/" + id).toPromise().then(response => response.json() as User[]);
  }

  toggle(user: User): Promise < User > {
    return this.http.post("/ajax/admin/users/" + user.id + "/toggle", user).toPromise().then(response => response.json() as User);
  }

  store(user: User) : Promise < User > {
    return this.http.post("/ajax/admin/users", user).toPromise().then(response => response.json() as User);
  }

  get(id: number): Promise < User > {
    return this.http.get("/ajax/admin/users/" + id).toPromise().then(response => response.json() as User);
  }

  update(user: User): Promise < User > {
    return this.http.patch("/ajax/admin/users/" + user.id, user).toPromise().then(response => response.json() as User);
  }

  validateEmail(email:string):Promise<{ [key: string]: any }>{
    return this.http.post("/ajax/users/validate",{"email":email}).toPromise().then(response=>{
      return response.json().result? null:{ 'emailNotRegistered': 'The email is already registered' }
    });
  }

  invite(user: User): Promise < User > {
      return this.http.post("/ajax/admin/users/invite", user).toPromise().then(response => response.json() as User);
  }
}

