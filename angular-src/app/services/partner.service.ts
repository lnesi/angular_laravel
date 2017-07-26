import { Injectable } from '@angular/core';
import {Partner } from '../models/Partner';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PartnerService {
	constructor(private http: Http) {
  	}

	getAll():Promise<Partner[]>{
		return this.http.get("/ajax/partners").toPromise().then(response=>response.json() as Partner[]);
	}

	delete(id):Promise<any>{
		return this.http.delete("/ajax/partners/"+id).toPromise().then(response=>response.json() as Partner[]);
	}
	toggle(partner:Partner):Promise<Partner>{
		return this.http.post("/ajax/partners/"+partner.id+"/toggle",partner).toPromise().then(response=>response.json() as Partner);
	}
}