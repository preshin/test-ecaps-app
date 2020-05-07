import { Component, OnInit } from "@angular/core";

export interface Categories {
  cols: number;
  rows: number;
  text: string;
  category: string;
  route: string;
  icon: string;
  amount: number;
}
@Component({
  selector: "koppr-spend",
  templateUrl: "./spend.component.html",
  styleUrls: ["./spend.component.scss"]
})
export class SpendComponent implements OnInit {
  categories: Categories[] = [
    {
      text: "Shopping",
      cols: 1,
      rows: 1,
      category: "My Card",
      route: "spends",
      icon: "shopping_cart",
      amount: 10000
    },
    {
      text: "Travel",
      cols: 1,
      rows: 1,
      category: "My Card",
      route: "spends",
      icon: "flight_takeoff",
      amount: 10000
    },
    {
      text: "Entertainment",
      cols: 1,
      rows: 1,
      category: "My Card",
      route: "spends",
      icon: "movie_filter",
      amount: 10000
    },
    {
      text: "Food",
      cols: 1,
      rows: 1,
      category: "My Card",
      route: "spend-item",
      icon: "local_cafe",
      amount: 10000
    },
    {
      text: "ATM Money",
      cols: 1,
      rows: 1,
      category: "My Card",
      route: "spends",
      icon: "attach_money",
      amount: 10000
    }
  ];

  constructor() {}

  ngOnInit() {}
}
