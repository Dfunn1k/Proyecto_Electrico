import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';

/* Components */
import { MainChartComponent } from '../components/main-chart/main-chart.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';

/* Pages */
import { LoginComponent } from '../pages/login/login.component';

LoginFormComponent


@NgModule({
  declarations: [
    /* Components */
    MainChartComponent,
    LoginFormComponent,
    /* Pages */
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports: [
    /* Components */
    MainChartComponent,
    LoginFormComponent,
    /* Pages */
    LoginComponent,
  ],
})
export class SecurityModule { }
