import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './local.service';

import { UserModel } from '../model/user.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  users: UserModel[];
  user: UserModel | undefined;
  isLogged: boolean | undefined = false;
  constructor(private router: Router, private localStore: LocalService, private apiService: ApiService) {
    let tmpUser = this.localStore.getData('user');
    if (tmpUser) {
      this.user = JSON.parse(tmpUser);
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    /* if (JSON.parse(localStorage.getItem('user')!) !== null) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    } */
    this.users = this.apiService.getUsers();
    /*this.users = [
      { email: 'elbab@gmail.com', password: '1234', roles: ['ADMIN', 'USER'] },
      { email: 'hugo@gmail.com', password: '1234', roles: ['USER'] },
    ];*/
  }

  login(email: string, password: string) {
    let user = this.users.find(
      (x) => x.email === email && x.password === password
    );
    if (user) {
      this.user = user;
      this.isLogged = true;
      this.localStore.saveData('user', JSON.stringify(this.user));

      return true;
    } else {
      alert("Identifiant ou mot de passe incorrect.");
      return false;
    }
    return false;
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
