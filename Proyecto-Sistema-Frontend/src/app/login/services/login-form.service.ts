import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  private apiURl = 'http://127.0.0.1:8000/login/';
  constructor(private http: HttpClient) {}

  login(user: string, password: string): void {
    console.log('Post en login');
    this.http.post(this.apiURl, { username: user, password: password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Ha ocurrido un error en la petición POST');
      },
    });
  }
}

