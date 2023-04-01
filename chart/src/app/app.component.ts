import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
interface Reading {
  id: number;
  MagV1: number;
  MagV2: number;
  MagV3: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'chart';
  fileToUpload: File | null = null;
  chart: Chart | null = null;

  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.fileToUpload = event.target.files.item(0);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('onSubmit called'); // Agrega esto para verificar si se llama a onSubmit
    console.log('fileToUpload:', this.fileToUpload); // Agrega esto para verificar el valor de fileToUpload
    if (this.fileToUpload) {
      const formData: FormData = new FormData();
      formData.append('file', this.fileToUpload, this.fileToUpload.name);

      this.http.post('http://localhost:8000/upload/', formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchData(); // Llama a fetchData() después de cargar y enviar el archivo Excel
        },
        (error) => console.log(error)
      );
    }
  }

  fetchData() {
    console.log('fetchData called');
    this.http
      .get<any[]>('http://localhost:8000/engines/')
      .subscribe((response) => {
        console.log('API response:', response); // Log de la respuesta del API
        if (response.length > 0) {
          const engine = response[0];
          const readings = engine.lecturas;
          const chartLabels = readings.map((reading: Reading) =>
            reading.id.toString()
          );
          const chartData = [
            {
              data: readings.map((reading: Reading) => reading.MagV1),
              label: 'MagV1',
            },
            {
              data: readings.map((reading: Reading) => reading.MagV2),
              label: 'MagV2',
            },
            {
              data: readings.map((reading: Reading) => reading.MagV3),
              label: 'MagV3',
            },
          ];
          console.log('Chart data:', chartData); // Log de los datos de la gráfica
          this.createChart(chartLabels, chartData);
        } else {
          this.chart = null;
        }
      });
  }

  createChart(labels: string[], data: any[]) {
    console.log('createChart called with labels:', labels, 'and data:', data);
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        responsive: true,
      },
    });
  }
}
