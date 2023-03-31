import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MainChartService } from '../../services/main-chart/main-chart.service'

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss'],
})
export class MainChartComponent implements OnInit {
  filteredValues: any = [];
  filteredIds: any = [];
  filteredValues3: any = [];
  filteredIds3: any = [];
  filteredValues4: any = [];
  filteredIds4: any = [];
  id: any;

  constructor(private chart: MainChartService) {}

  ngOnInit() {
    this.id = document.getElementById('mainChart');
    Chart.register(...registerables);

    this.chart.printText().subscribe((data: any) => {
      console.log(data[0][0]);
      const filteredTime = data[0].map((item: any) => item.time)
      console.log(filteredTime);
      const filteredValue = data[0].map((item: any) => item.value)
      console.log(filteredValue);
      // this.filteredValues = data[0].lecturas.map((lectura: any) => lectura.value);
      // this.filteredIds = data[0].lecturas.map((lectura: any) => lectura.id);
      // this.filteredValues3 = data[3].lecturas.map((lectura: any) => lectura.value);
      // this.filteredIds3 = data[3].lecturas.map((lectura: any) => lectura.id);
      // this.filteredValues4 = data[4].lecturas.map((lectura: any) => lectura.value);
      // this.filteredIds = data[4].lecturas.map((lectura: any) => lectura.id);

      // this.chart.printchart(this.filteredValues, this.filteredIds, this.id, this.filteredValues3, this.filteredIds3, this.filteredValues4, this.filteredIds4,);
      this.chart.printchart(filteredTime, filteredValue, this.id)
    });

  }
}

