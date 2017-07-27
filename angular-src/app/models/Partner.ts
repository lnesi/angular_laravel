export class Partner{
	id:number
	name:string
	url:string
	abbr:string
	active:boolean
	constructor(name:string="",abbr:string="",url:string=""){
		this.name=name;
		this.abbr=abbr;
		this.url=url;
	}
}