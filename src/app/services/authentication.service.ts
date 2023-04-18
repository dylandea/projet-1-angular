import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './local.service';

import { UserModel } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  users: UserModel[];
  user: UserModel | undefined;

  constructor(private router: Router, private localStore: LocalService) {
    /* if (JSON.parse(localStorage.getItem('user')!) !== null) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    } */

    this.users = [
      { email: 'elbab@gmail.com', password: '1234', roles: ['ADMIN', 'USER'] },
      { email: 'hugo@gmail.com', password: '1234', roles: ['USER'] },
    ];
  }

  login(email: string, password: string) {
    if (this.users.some((x) => x.email === email && x.password === password)) {
      this.localStore.saveData('user', JSON.stringify(this.user));
      /* localStorage.setItem('user', JSON.stringify(this.user)); */
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }

  isAdmin() {
    return this.user?.roles.includes('ADMIN');
  }
}
