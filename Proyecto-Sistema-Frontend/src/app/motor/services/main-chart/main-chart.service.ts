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
    return this.http.get('http://localhost:3000/columnas');

  }

  printchart(
    filteredTime: any,
    filteredValues: any,
    id: any,
    // filteredValues: any,
    // filteredIds: any,
    // id: any,
    // filteredValues3: any,
    // filteredIds3: any,
    // filteredValues4: any,
    // filteredIds4: any
  ): any {
    return new Chart(id, {
      type: 'line',
      data: {
        labels: filteredTime,
        datasets: [
          {
            label: 'Graph 1',
            backgroundColor: '#f7fb00',
            pointRadius: 0,
            borderColor: '#dcdf00',
            tension: 0.3,
            borderWidth: 2,
            data: filteredValues,
          },
          {
            label: 'Graph 2',
            backgroundColor: '#a52019',
            pointRadius: 0,
            borderColor: 'red',
            tension: 0.3,
            borderWidth: 2,
            data: [220, 219, 217, 214, 210, 205, 200, 194, 188, 181, 174, 166, 158, 150, 141, 132, 123, 114, 105, 96, 87, 78, 70, 62, 54, 47, 40, 33, 27, 21, 16, 12, 8, 5, 2, 1, 0, 0, 1, 2, 5, 8, 12, 16, 21, 27, 33, 40, 47, 54, 62, 70, 78, 87, 96, 105, 114, 123, 132, 141, 150, 158, 166, 174, 181, 188, 194, 200, 205, 210, 214, 217, 219, 220, 220, 219, 217, 214, 210, 205, 200, 194, 188, 181, 174, 166, 158, 150, 141, 132, 123, 114, 105, 96, 87, 78, 70, 62, 54, 47, 40, 33, 27, 21, 16, 12, 8, 5, 2, 1, 0, 0, 1, 2, 5, 8, 12, 16, 21, 27, 33, 40, 47, 54, 62, 70, 78, 87, 96, 105, 114, 123, 132, 141, 150, 158, 166, 174, 181, 188, 194, 200, 205, 210, 214, 217, 219, 220]
          },
          {
            label: 'Graph 3',
            backgroundColor: '#00bccc',
            pointRadius: 0,
            borderColor: 'blue',
            tension: 0.3,
            data: [230, 229, 226, 222, 217, 210, 202, 193, 182, 170, 157, 143, 128, 113, 97, 81, 65, 49, 34, 20, 8, 0, 1, 16, 44, 84, 135, 195, 262, 333, 405, 474, 536, 588, 628, 651, 654, 636, 596, 536, 458, 365, 262, 155, 49, -47, -136, -207, -255, -277, -269, -231, -164, -70, 43, 166, 297, 430, 558, 672, 764, 827, 856, 849, 809, 740, 648, 539, 417, 287, 152, 17, -117, -244, -361, -465, -552, -619, -665, -686, -683, -655, -601, -522, -421, -300, -163, -12, 144, 308, 475, 639, 787, 913, 1012, 1078, 1108, 1099, 1051, 967, 849, 703, 536, 357, 174, -12, -195, -368, -525, -661, -769, -846, -888, -896, -868, -803, -703, -568, -400, -202, 21, 195, 262, 333, 405, 474, 536, 588, 628, 651, 654, 636, 596, 536, 458, 365, 262, 155, 49,],
          },
        ],
      },
    });
  }



}
