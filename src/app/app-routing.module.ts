import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdercongratsComponent } from './ordercongrats/ordercongrats.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AdminGuard } from './components/admin.guard';
import { CustomerComponent } from './customer/customer.component';
import { AuthComponent } from './auth/auth.component';
import { AddTrainingComponent } from './admin-management/add-training/add-training.component';
import { UpdateTrainingComponent } from './admin-management/update-training/update-training.component';
import { TableTrainingsComponent } from './admin-management/table-trainings/table-trainings.component';

const routes: Routes = [
  {
    path: 'trainings',
    component: TrainingsComponent,
  },
  {
    path: 'adminManagement',
    component: AdminManagementComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: TableTrainingsComponent,
      },
      {
        path: 'add',
        component: AddTrainingComponent,
      },
      {
        path: 'update',
        component: UpdateTrainingComponent,
      },
    ],
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
    component: BasketComponent,
  },
  {
    path: 'order-congrats',
    component: OrdercongratsComponent,
  },
  {
    path: 'order-form',
    component: CustomerComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
