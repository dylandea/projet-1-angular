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
import { OrdercongratsComponent } from './ordercongrats/ordercongrats.component';
import { FooterComponent } from './footer/footer.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthComponent } from './auth/auth.component';
import { AddTrainingComponent } from './admin-management/add-training/add-training.component';
import { UpdateTrainingComponent } from './admin-management/update-training/update-training.component';
import { TableTrainingsComponent } from './admin-management/table-trainings/table-trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    NavbarComponent,
    AboutComponent,
    BasketComponent,
    NotFoundComponent,
    OrdercongratsComponent,
    FooterComponent,
    AdminManagementComponent,
    CustomerComponent,
    AuthComponent,
    AddTrainingComponent,
    UpdateTrainingComponent,
    TableTrainingsComponent,
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
