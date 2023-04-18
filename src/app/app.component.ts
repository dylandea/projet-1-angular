import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormaFun';
  /*   user: UserModel; */

  constructor(private authenticationService: AuthenticationService) {
    /* this.user= null; */
    /*   this.authenticationService.user.subscribe(x => this.user = x); */
  }

  /* get isAdmin() {
        return this.user && this.user.role === Role.Admin;
  } */

  logout() {
    this.authenticationService.logout();
  }
}
