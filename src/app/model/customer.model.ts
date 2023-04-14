export class CustomerModel {
    lastname : String;
    firstname : String;
    phone: String;
    address: String;
    email: String;

  constructor(
    lastname: String, 
    firstname: String, 
    phone: String, 
    address: String, 
    email: String
) {
    this.lastname = lastname
    this.firstname = firstname
    this.phone = phone
    this.address = address
    this.email = email
  }

}
