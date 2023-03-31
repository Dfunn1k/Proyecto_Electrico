import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MainChartService } from '../../services/main-chart/main-chart.service'

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss'],
})
export class MainChartComponent implements OnInit {

  id: any;

  constructor(private chart: MainChartService) {}

  ngOnInit() {
    this.id = document.getElementById('mainChart');
    Chart.register(...registerables);

    this.chart.printText().subscribe((data: any) => {

      const filtered1 = data[0].lecturas.map((item: any) => item.MagV1)
      console.log(filtered1 , "second");
      const filtered2 = data[0].lecturas.map((item: any) => item.MagV2)
      const filtered3 = data[0].lecturas.map((item: any) => item.MagV3)
      const labels = data[0].lecturas.map((item: any) => item.id)
      
      this.chart.printchart(filtered1, filtered2, filtered3, labels, this.id)
    });

  }
}

