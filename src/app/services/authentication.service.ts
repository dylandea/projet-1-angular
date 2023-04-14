import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public user: UserModel;

constructor (private router: Router) {
  this.user = JSON.parse(localStorage.getItem('user') || '{}')
}
    login(username: string, password: string) {
                localStorage.setItem('user', JSON.stringify(this.user));
                return this.user;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.router.navigateByUrl('login');
    }
}
