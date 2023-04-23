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
      lastname: [
        this.basketService.getCustomer().lastname,
        Validators.required,
      ],
      firstname: [
        this.basketService.getCustomer().firstname,
        Validators.required,
      ],
      phone: [
        this.basketService.getCustomer().phone,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      address: [
        this.basketService.getCustomer().address,
        [Validators.required],
      ],
      email: [
        this.basketService.getCustomer().email,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  onSaveCustomer() {
    if (this.myForm.valid) {
      this.basketService.saveCustomer(
        new CustomerModel(
          this.myForm.value.lastname,
          this.myForm.value.firstname,
          this.myForm.value.phone,
          this.myForm.value.address,
          this.myForm.value.email
        )
      );
      this.router.navigateByUrl('order-congrats');
    } else {
      console.log('form not valid');
    }
  }
}
