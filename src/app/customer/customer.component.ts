import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
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
  
  constructor(public basketService : BasketService, private router : Router, private formBuilder : FormBuilder){
    this.myForm = new FormGroup({
      name : new FormControl(),
      firstname : new FormControl(),
      phone : new FormControl(),
      address: new FormControl(),
      email : new FormControl()
    })
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      firstname : ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(25)]],
      email: ['', Validators.required, Validators.pattern("[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.]")]
    });
  }


onSaveCustomer(form : FormGroup){
  if(form.valid){
    this.basketService.saveCustomer(new CustomerModel(form.value.name, form.value.firstname, form.value.address, form.value.phone, form.value.email));
    this.router.navigateByUrl('order');
  }
}


  
}

