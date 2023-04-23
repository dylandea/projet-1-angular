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
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    public basketService: BasketService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
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
        alert('Vous etes bien connecté !');
      } else {
        this.router.navigateByUrl('auth');
      }
    }
  }
}
