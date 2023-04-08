import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginFormService {

  private apiURl = 'http://127.0.0.1:8000/login/';
  errorMessage: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  login(user: string, password: string): void {
    console.log('Post en login');
    this.http
      .post(
        this.apiURl,
        { username: user, password: password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/dashboardmotor']);
        },
        error: (error) => {
          console.log('Ha ocurrido un error en la petición POST');
          this.errorMessage = error.error.error
        },
      });
  }
}
