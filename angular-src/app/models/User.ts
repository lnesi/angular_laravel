import {Partner} from "./Partner";

export class User{
	id:number
	name:string
	email:string
	partner_id:number
	partner:Partner
	password:string
	is_admin:null
	construtor(){
		this.partner=new Partner();
	}
}