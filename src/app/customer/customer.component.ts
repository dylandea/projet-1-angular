import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CustomerModel } from '../model/customer.model';
import { BasketService } from '../services/basket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  myForm : FormGroup;
  
  constructor(public basketService : BasketService, private router : Router){
    let customer = this.basketService.getCustomer();
    this.myForm = new FormGroup({
      name : new FormControl(customer.lastname),
      firstname : new FormControl(customer.firstname),
      address: new FormControl(customer.address),
      phone : new FormControl(customer.phone),
      email : new FormControl(customer.email)
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


onSaveCustomer(form : FormGroup){
  if(form.valid){
    this.basketService.saveCustomer(new CustomerModel(form.value.name, form.value.firstname, form.value.address, form.value.phone, form.value.email));
    this.router.navigateByUrl('order');
  }
}


  
}
