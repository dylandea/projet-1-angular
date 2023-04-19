import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerModel } from '../model/customer.model';
import { BasketService } from '../services/basket.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    public basketService: BasketService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private formBuilder : FormBuilder
  ) {
    this.myForm = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
      
    })
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.pattern("[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.]")],
      password: ['', [Validators.required, Validators.pattern("^([0-9]{4,}$")]],
    });
  }

  onLogin() {
    if (this.myForm.valid) {
      if (
        this.authenticationService.login(
          this.myForm.value.email,
          this.myForm.value.password
        ) === true
      ) {
        if (this.authenticationService.isAdmin()) {
          this.router.navigateByUrl('adminManagement');
        } else {
          this.router.navigateByUrl('trainings');
        }
      } else {
        this.router.navigateByUrl('404');
      }
    }
  }
}


