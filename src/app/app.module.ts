import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdercongratsComponent } from './ordercongrats/ordercongrats.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    NavbarComponent,
    AboutComponent,
    BasketComponent,
    NotFoundComponent,
    OrderFormComponent,
    OrdercongratsComponent,
    FooterComponent,
    LoginComponent,
    CustomerComponent,
    AuthComponentComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
