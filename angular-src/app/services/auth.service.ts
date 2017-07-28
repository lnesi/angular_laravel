import { Injectable } from '@angular/core';
import { User } from "../models/User"
import { CanActivate,Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class AuthService {
  
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

@Injectable()
export class AdminGuard implements CanActivate {
	currentUser:User=null
	constructor( private auth: AuthService,private router: Router) {
		console.log("constructor canActivate");
		
	}
	canActivate(){
		return new Promise((resolve, reject) => {
			this.auth.getCurrent().then(response=>{
				if(response.is_admin==1){
					resolve(true);
				}else{
					 this.router.navigate(['/403']);
					 resolve(false);
				}
			});
			
		})
    	
	}
}
