import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Modules*/
import { SecurityModule } from './motor/security/security.module';

/* Services */
import { MainChartService } from './motor/services/main-chart/main-chart.service';
import { DataUploaderService } from './motor/services/data-uploader/data-uploader.service';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* Modules */
    SecurityModule,
  ],
  providers: [
    /* Services */
    MainChartService,
    DataUploaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
