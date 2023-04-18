import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserModel } from './model/user.model';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormaFun';
  user: UserModel | undefined;
  /*   user: UserModel; */

  constructor(
    private authenticationService: AuthenticationService,
    private localStore: LocalService
  ) {
    this.user = this.authenticationService.getUser();
    this.localStore.getData('user');
  }

  /* get isAdmin() {
        return this.user && this.user.role === Role.Admin;
  } */

  logout() {
    this.authenticationService.logout();
  }
}
