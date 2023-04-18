import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdercongratsComponent } from './ordercongrats/ordercongrats.component';
import { AdminGuard } from './components/admin.guard';

const routes: Routes = [
  {
    path : 'trainings',
    component : TrainingsComponent
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
  },
  {
    path : 'admin', component : AdminComponent, canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
