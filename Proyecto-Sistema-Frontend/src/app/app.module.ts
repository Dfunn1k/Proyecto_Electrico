import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {trigger,state,style,animate,transition}from '@angular/animations';

/* Modules*/
import { SecurityModule } from './motor/security/security.module';

/* Services */
import { MainChartService } from './motor/services/main-chart/main-chart.service';
import { DataUploaderService } from './motor/services/data-uploader/data-uploader.service';
import { LoginFormService } from './login/services/login-form.service';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // Modules 
    SecurityModule,
  ],
  providers: [
    /* Services */
    MainChartService,
    DataUploaderService,
    LoginFormService,
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}
