import { Role } from "./role";

export class UserModel {
    email: String;
    password: String;
    role: Role;
  constructor(email: String, password: String, role: Role) {
    this.email = email
    this.password = password
    this.role = role
  }
}