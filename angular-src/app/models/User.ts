import {Partner} from "./Partner";

export class User{
	id:number
	name:string
	email:string
	partner_id:number
	partner:Partner
	password:string
	construtor(){
		this.partner=new Partner();
	}
}