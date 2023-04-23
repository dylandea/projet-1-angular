import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './local.service';

import { UserModel } from '../model/user.model';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { TrainingModel } from '../model/training.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: UserModel | undefined;
  isLogged: boolean | undefined = false;
  error: null | undefined;

  constructor(
    private router: Router,
    private localStore: LocalService,
    private http: HttpClient
  ) {
    let tmpUser = this.localStore.getData('user');
    if (tmpUser) {
      this.user = JSON.parse(tmpUser);
      this.isLogged = true;
    }
  }

  login(email: string, password: string) {
    /* let user = this.users.find(
      (x) => x.email === email && x.password === password
    ); */

    return this.http
      .get<UserModel[]>(
        environment.host + '/users?email=' + email + '&password=' + password
      )
      .subscribe({
        next: (data) => {
          if (data.length !== 0) {
            this.user = data[0];
            this.isLogged = true;
            this.localStore.saveData('user', JSON.stringify(this.user));

            return true;
          } else {
            alert('Identifiant ou mot de passe incorrect.');
            return false;
          }
        },
        error: (err) => (this.error = err.message),
        complete: () => (this.error = null),
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogged = false;
    this.user = undefined;
    this.router.navigateByUrl('/');
    alert('A bientôt !');
  }

  isAdmin() {
    return this.user?.roles.includes('ADMIN');
  }

  isLoggedFunc() {
    return this.isLogged;
  }

  getUser(): UserModel | undefined {
    return this.user;
  }
}
