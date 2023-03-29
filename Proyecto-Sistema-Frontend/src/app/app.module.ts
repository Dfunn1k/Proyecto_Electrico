import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Modules*/
import { SecurityModule } from './motor/security/security.module';

/* Services */
import { MotorService } from './motor/services/motor.service';


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
    MotorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
