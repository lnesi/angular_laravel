import { Component } from '@angular/core';
import { User } from './models/User';
import { UserService } from "./services/user.service";
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
	  this.getCurrentUser();
  }
  constructor(private userService:UserService){

  
  	
  }
  
  getCurrentUser(){
  		this.userService.getCurrent().then(user=>this.currentUser=user);
  		//this.currentUser.then(user=>this.user=user);
  		
  }

  logout(){

  	this.userService.logout().then(response=>{
  		window.location.href="/";
  	});
  }
  
  title = 'app';
  currentUser:User=new User;
  
}
