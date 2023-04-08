import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataUploaderService {
  constructor(private http: HttpClient) {}

  upload(ExcelData: any): void {
    console.log(ExcelData, 'ExcelData');
    this.http.post('http://127.0.0.1:8000/upload/', ExcelData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Ha ocurrido un error en la petición POST');
      }
    );
  }

  // $modal = new EventEmitter<any>();
  // enviarMensaje(mensaje: string) {
  //   this.mensaje = mensaje;
  // }
}
