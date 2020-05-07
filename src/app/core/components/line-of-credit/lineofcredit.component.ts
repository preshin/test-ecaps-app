import { Component, OnInit } from "@angular/core";

export interface FeatureLists {
  cols: number;
  rows: number;
  text: string;
  body: string;
}
@Component({
  selector: "koppr-LoC",
  templateUrl: "./lineofcredit.component.html",
  styleUrls: ["./lineofcredit.component.scss"]
})
export class LineOfCreditComponent implements OnInit {
  featureLists: FeatureLists[] = [
    {
      text: "Feature 1",
      cols: 1,
      rows: 1,
      body:
        "Your credit limit is recharged as you repay your borrowed amount giving you the flexibility to withdraw multiple times."
    },
    {
      text: "Feature 2",
      cols: 1,
      rows: 1,
      body:
        "Borrow an amount as low as ₹ 3,000 from your personal line of credit."
    },
    {
      text: "Feature 3",
      cols: 1,
      rows: 1,
      body:
        "Your credit limit is recharged as you repay your borrowed amount giving you the flexibility to withdraw multiple times."
    },
    {
      text: "Feature 4",
      cols: 1,
      rows: 1,
      body:
        "Borrow an amount as low as ₹ 3,000 from your personal line of credit."
    }
  ];

  constructor() {}

  ngOnInit() {}
}
