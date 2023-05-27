import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Pages */
import { LoginComponent } from '../../login/pages/login/login.component';
import { DashboardMotorComponent  } from '../pages/dashboard-motor/dashboard-motor.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
    path: '',
    component: DashboardMotorComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
