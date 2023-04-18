import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdercongratsComponent } from './ordercongrats/ordercongrats.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AdminGuard } from './components/admin.guard';
import { CustomerComponent } from './customer/customer.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'trainings',
    component: TrainingsComponent,
  },
  {
    path: 'adminManagement',
    component: AdminManagementComponent,
  },
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'basket',
    component: CustomerComponent,
  },
  {
    path: 'order-congrats',
    component: OrdercongratsComponent,
  },
  {
    path: 'order-form',
    component: OrderFormComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
  {
    path: 'admin',
    component: AdminManagementComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
