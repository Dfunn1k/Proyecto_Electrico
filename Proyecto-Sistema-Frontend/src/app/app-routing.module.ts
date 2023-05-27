import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityRoutingModule } from './motor/security/security-routing.module';


const routes: Routes = [
  {
    path: 'motor',
    loadChildren: () =>
      import('./motor/security/security.module').then(
        (m) => m.SecurityModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SecurityRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
