/* import { Role } from './role'; */

export class UserModel {
  email: string;
  password: string;
  roles: string[];
  constructor(email: string, password: string, roles: string[]) {
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}
