import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SecurityRoutingModule } from './security-routing.module';

/* Tree imports */
// import { MatTreeModule } from '@angular/material/tree';
// import { MatIconModule } from '@angular/material/icon';

/* Pages */
import { LoginComponent } from '../../login/pages/login/login.component';
import { DashboardMotorComponent } from '../pages/dashboard-motor/dashboard-motor.component';

/* Components */
import { LoginFormComponent } from '../../login/components/login-form/login-form.component';
import { DataUploaderComponent } from '../components/table/data-uploader/data-uploader.component';
import { MainChartComponent } from '../../motor/components/table/table-one/main-chart/main-chart.component'
// import { SideBarComponent } from '../../motor/components/side-bar/side-bar.component';
import { TableComponent } from '../components/table/table.component';
import { TableOneComponent } from '../components/table/table-one/table-one.component';
import { TableTwoComponent } from '../components/table/table-two/table-two.component';
import { EngineButtonsComponent } from '../components/engine-buttons/engine-buttons.component';
import { PowerQualityComponent } from '../components/engine-buttons/power-quality/power-quality.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    /* Pages */
    LoginComponent,
    DashboardMotorComponent,

    /* Components */
    LoginFormComponent,
    DataUploaderComponent,
    MainChartComponent,
    // SideBarComponent,
    TableComponent,
    TableOneComponent,
    TableTwoComponent,
    EngineButtonsComponent,
    PowerQualityComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    HttpClientModule,
     /* Tree imports*/
    //  MatTreeModule,
    //  MatIconModule,
  ],
  exports: [
    /* Pages */
    LoginComponent,
    DashboardMotorComponent,

    /* Components */
    LoginFormComponent,
    DataUploaderComponent,
    MainChartComponent,
    // SideBarComponent,
    TableComponent,
    TableOneComponent,
    TableTwoComponent,
    EngineButtonsComponent,
    PowerQualityComponent,
    NavBarComponent,
  ],
})
export class SecurityModule { }
