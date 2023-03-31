import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainChartService {

  constructor(private http: HttpClient) {}

  printText(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/engines/');
  }

  printchart(
    filtered1: any,
    filtered2: any,
    filtered3: any,
    labels: any,
    id: any,
  ): any {
    return new Chart(id, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Graph 1',
            backgroundColor: '#f7fb00',
            pointRadius: 0,
            borderColor: '#dcdf00',
            tension: 0.3,
            borderWidth: 2,
            data: filtered1,
          },
          {
            label: 'Graph 2',
            backgroundColor: '#a52019',
            pointRadius: 0,
            borderColor: 'red',
            tension: 0.3,
            borderWidth: 2,
            data: filtered2
          },
          {
            label: 'Graph 3',
            backgroundColor: '#00bccc',
            pointRadius: 0,
            borderColor: 'blue',
            tension: 0.3,
            data: filtered3,
          },
        ],
      },
    });
  }



}
