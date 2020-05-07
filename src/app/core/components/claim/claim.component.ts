import { Component, OnInit } from "@angular/core";

export interface Headings {
  cols: number;
  rows: number;
  text: string;
}
export interface CurrentClaims {
  cols: number;
  rows: number;
  amount: number;
  date: Date;
  type: string;
  status: string;
}
export interface PastClaims {
  cols: number;
  rows: number;
  amount: number;
  date: Date;
  type: string;
  status: string;
}

@Component({
  selector: "koppr-claim",
  templateUrl: "./claim.component.html",
  styleUrls: ["./claim.component.scss"]
})
export class ClaimComponent implements OnInit {
  showCurrentClaims: boolean = true;
  claimsList = [];
  claimTabBorder = this.showCurrentClaims ? "tab-selected" : "tab-not-selected";
  pastTabBorder = !this.showCurrentClaims ? "tab-selected" : "tab-not-selected";
  headings: Headings[] = [
    {
      text: "Date",
      cols: 2,
      rows: 1
    },
    {
      text: "Amount",
      cols: 2,
      rows: 1
    },
    {
      text: "Type",
      cols: 2,
      rows: 1
    },
    {
      text: "Status",
      cols: 2,
      rows: 1
    }
  ];

  currentClaims: CurrentClaims[] = [
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Fuel",
      status: "Pending"
    },
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Food",
      status: "Pending"
    },
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Travel",
      status: "Pending"
    }
  ];

  pastClaims: CurrentClaims[] = [
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Food",
      status: "Settled"
    },
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Fuel",
      status: "Settled"
    },
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Travel",
      status: "Settled"
    },
    {
      cols: 1,
      rows: 1,
      amount: 1000,
      date: new Date(),
      type: "Gadget",
      status: "Settled"
    }
  ];

  toggleTab() {
    this.showCurrentClaims = !this.showCurrentClaims;
    this.claimTabBorder = this.showCurrentClaims
      ? "tab-selected"
      : "tab-not-selected";
    this.pastTabBorder = !this.showCurrentClaims
      ? "tab-selected"
      : "tab-not-selected";

    this.claimsList = this.showCurrentClaims
      ? this.currentClaims
      : this.pastClaims;
  }

  constructor() {}

  ngOnInit() {
    this.claimsList = this.currentClaims;
  }
}
