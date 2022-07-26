import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexXAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-top-link-chart',
  templateUrl: './top-link-chart.component.html',
  styleUrls: ['./top-link-chart.component.scss']
})
export class TopLinkChartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  // public chartOptions: ChartOptions = {
  //   series: [
  //     {
  //       name: "distibuted",
  //       data: [21, 22, 10, 28, 16, 21, 13, 30]
  //     }
  //   ],
  //   chart: {
  //     height: 350,
  //     type: "bar",
  //     events: {
  //       click: function(chart, w, e) {
  //         // console.log(chart, w, e)
  //       }
  //     }
  //   },
  //   colors: [
  //     "#008FFB",
  //     "#00E396",
  //     "#FEB019",
  //     "#FF4560",
  //     "#775DD0",
  //     "#546E7A",
  //     "#26a69a",
  //     "#D10CE8"
  //   ],
  //   plotOptions: {
  //     bar: {
  //       columnWidth: "45%",
  //       distributed: true
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   legend: {
  //     show: false
  //   },
  //   grid: {
  //     show: false
  //   },
  //   xaxis: {
  //     categories: [
  //       ["John", "Doe"],
  //       ["Joe", "Smith"],
  //       ["Jake", "Williams"],
  //       "Amber",
  //       ["Peter", "Brown"],
  //       ["Mary", "Evans"],
  //       ["David", "Wilson"],
  //       ["Lily", "Roberts"]
  //     ],
  //     labels: {
  //       style: {
  //         colors: [
  //           "#008FFB",
  //           "#00E396",
  //           "#FEB019",
  //           "#FF4560",
  //           "#775DD0",
  //           "#546E7A",
  //           "#26a69a",
  //           "#D10CE8"
  //         ],
  //         fontSize: "12px"
  //       }
  //     }
  //   }
  // };;

  constructor() {
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "distibuted",
    //       data: [21, 22, 10, 28, 16, 21, 13, 30]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "bar",
    //     events: {
    //       click: function(chart, w, e) {
    //         // console.log(chart, w, e)
    //       }
    //     }
    //   },
    //   colors: [
    //     "#008FFB",
    //     "#00E396",
    //     "#FEB019",
    //     "#FF4560",
    //     "#775DD0",
    //     "#546E7A",
    //     "#26a69a",
    //     "#D10CE8"
    //   ],
    //   plotOptions: {
    //     bar: {
    //       columnWidth: "45%",
    //       distributed: true
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   legend: {
    //     show: false
    //   },
    //   grid: {
    //     show: false
    //   },
    //   xaxis: {
    //     categories: [
    //       ["John", "Doe"],
    //       ["Joe", "Smith"],
    //       ["Jake", "Williams"],
    //       "Amber",
    //       ["Peter", "Brown"],
    //       ["Mary", "Evans"],
    //       ["David", "Wilson"],
    //       ["Lily", "Roberts"]
    //     ],
    //     labels: {
    //       style: {
    //         colors: [
    //           "#008FFB",
    //           "#00E396",
    //           "#FEB019",
    //           "#FF4560",
    //           "#775DD0",
    //           "#546E7A",
    //           "#26a69a",
    //           "#D10CE8"
    //         ],
    //         fontSize: "12px"
    //       }
    //     }
    //   }
    // };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};