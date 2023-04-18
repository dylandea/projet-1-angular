import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdercongratsComponent } from './ordercongrats/ordercongrats.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';

const routes: Routes = [
  {
    path : 'trainings',
    component : TrainingsComponent
  },
  {
    path : 'adminManagement',
    component : AdminManagementComponent
  },
  {
    path : '',
    component : AboutComponent
  },
  {
    path : 'basket',
    component : BasketComponent
  },
  {
    path : '404',
    component : NotFoundComponent
  },
  {
    path : 'order-congrats',
    component : OrdercongratsComponent
  },
  {
    path : 'order-form',
    component : OrderFormComponent
  },
  {
    path : '**',
    redirectTo: '/404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
