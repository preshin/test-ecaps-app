import { Component, OnInit } from "@angular/core";

@Component({
  selector: "koppr-loc-credit-confirm",
  templateUrl: "./loccreditconfirm.component.html",
  styleUrls: ["./loccreditconfirm.component.scss"]
})
export class LOCCreditConfirmComponent implements OnInit {
  amount: number = 0;
  interestAmount: number = 0;
  monthlyInterest: number = 14;
  onInputChange(e: any) {
    this.amount = e.value;
    this.interestAmount = (this.monthlyInterest / 100) * this.amount;
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }

    return value;
  }

  constructor() {}

  ngOnInit() {}
}
