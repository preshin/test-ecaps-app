import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label, BaseChartDirective } from "ng2-charts";

export interface Weeks {
  cols: number;
  rows: number;
  text: string;
  weekNumber: number;
  styleClass: string;
}

@Component({
  selector: "koppr-spend-analyser",
  templateUrl: "./spendanalyser.component.html",
  styleUrls: ["./spendanalyser.component.scss"]
})
export class SpendAnalyserComponent implements OnInit {
  //Line Graph
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Total Spend" }
  ];
  public lineChartLabels: Label[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul"
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.1,
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            // display:false,
            // drawBorder: false,
            // lineWidth: 25
          }
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "lightgrey",
      backgroundColor: "lightgrey"
    }
  ];
  public lineChartLegend = false;
  public lineChartType = "line";
  public lineChartPlugins = [];

  // Bar Graph

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public barData = [65, 59, 80, 81, 56, 55, 40];
  public barChartType = "bar";
  public barChartData: ChartDataSets[] = [
    { data: this.barData, label: "Total Spend" }
  ];
  public barChartLabels: Label[] = ["M", "T", "W", "T", "F", "S", "S"];

  weeks: Weeks[] = [
    {
      cols: 1,
      rows: 1,
      text: "Week 1",
      weekNumber: 1,
      styleClass: "week-selected"
    },
    {
      cols: 1,
      rows: 1,
      text: "Week 2",
      weekNumber: 2,
      styleClass: "week-not-selected"
    },
    {
      cols: 1,
      rows: 1,
      text: "Week 3",
      weekNumber: 3,
      styleClass: "week-not-selected"
    },
    {
      cols: 1,
      rows: 1,
      text: "Week 4",
      weekNumber: 4,
      styleClass: "week-not-selected"
    }
  ];

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }
  onWeekChange(weekNum: number) {
    for (let i = 0; i < this.weeks.length; i++) {
      if (this.weeks[i].weekNumber === weekNum) {
        this.weeks[i].styleClass = "week-selected";
      } else {
        this.weeks[i].styleClass = "week-not-selected";
      }
    }
    this.barData = [];
    for (let j = 0; j < this.barChartData[0].data.length; j++) {
      this.barData.push(this.randomNumber());
    }
    this.barChartData[0].data = this.barData;
    this.chart.update();
  }

  constructor() {}

  ngOnInit() {}
}
