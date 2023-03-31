import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataUploaderService {

  constructor(private http: HttpClient) {}


  upload(ExcelData: any): Observable<any> {
    console.log(ExcelData);
    return this.http.post('http://localhost:3000/columnas', ExcelData);
  }
}
