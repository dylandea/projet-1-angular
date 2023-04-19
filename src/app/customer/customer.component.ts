import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CustomerModel } from '../model/customer.model';
import { BasketService } from '../services/basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    public basketService: BasketService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(25)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.]"
          ),
        ],
      ],
    });
  }

  onSaveCustomer(form: FormGroup) {
    console.log(localStorage.getItem('customer'));
    if (this.myForm.valid) {
      this.basketService.saveCustomer(
        new CustomerModel(
          this.myForm.value.name,
          this.myForm.value.firstname,
          this.myForm.value.address,
          this.myForm.value.phone,
          this.myForm.value.email
        )
      );
    }
  }
}
