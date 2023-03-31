import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SecurityRoutingModule } from './security-routing.module';

/* Components */

import { LoginFormComponent } from '../../login/components/login-form/login-form.component';
import { DataUploaderComponent } from '../components/data-uploader/data-uploader.component';
import { MainChartComponent } from '../components/main-chart/main-chart.component';

/* Pages */
import { LoginComponent } from '../../login/pages/login/login.component';
import { DashboardMotorComponent } from '../pages/dashboard-motor/dashboard-motor.component';



@NgModule({
  declarations: [
    /* Components */
    LoginFormComponent,
    DataUploaderComponent,
    MainChartComponent,
    /* Pages */
    LoginComponent,
    DashboardMotorComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    HttpClientModule,
  ],
  exports: [
    /* Components */
    LoginFormComponent,
    DataUploaderComponent,
    MainChartComponent,
    /* Pages */
    LoginComponent,
    DashboardMotorComponent,
  ],
})
export class SecurityModule { }
