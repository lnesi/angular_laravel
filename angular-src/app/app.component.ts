import { Component } from '@angular/core';
import { User } from './models/User';
import { AuthService } from "./services/auth.service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getCurrentUser();
  }

  constructor(private authService: AuthService) {}

  getCurrentUser() {
    this.authService.getCurrent().then(user => this.currentUser = user);
  }

  logout() {
    this.authService.logout().then(response => {
      window.location.href = "/";
    });
  }

  title = 'app';
  currentUser: User = new User;
}
