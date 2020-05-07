import { Component, OnInit } from "@angular/core";

export interface Categories {
  cols: number;
  rows: number;
  text: string;
  category: string;
  amount: number;
  date: Date;
}
@Component({
  selector: "koppr-spend-item",
  templateUrl: "./spenditem.component.html",
  styleUrls: ["./spenditem.component.scss"]
})
export class SpendItemComponent implements OnInit {
  categories: Categories[] = [
    {
      text: "Subway",
      cols: 1,
      rows: 1,
      category: "My Card",
      amount: 10000,
      date: new Date()
    },
    {
      text: "Pizza Hut",
      cols: 1,
      rows: 1,
      category: "My Card",
      amount: 10000,
      date: new Date()
    },
    {
      text: "Burger King",
      cols: 1,
      rows: 1,
      category: "My Card",
      amount: 10000,
      date: new Date()
    },
    {
      text: "Dominos",
      cols: 1,
      rows: 1,
      category: "My Card",
      amount: 10000,
      date: new Date()
    },
    {
      text: "KFC",
      cols: 1,
      rows: 1,
      category: "My Card",
      amount: 10000,
      date: new Date()
    }
  ];

  constructor() {}

  ngOnInit() {}
}
