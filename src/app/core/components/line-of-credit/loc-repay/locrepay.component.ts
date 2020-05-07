import { Component, OnInit } from "@angular/core";

@Component({
  selector: "koppr-loc-repay",
  templateUrl: "./locrepay.component.html",
  styleUrls: ["./locrepay.component.scss"]
})
export class LocRepayComponent implements OnInit {
  interestAmount: number = 10500;
  repaymentAmount: number = 0;
  principalAmount: number = 75000;
  totalAmount: number = this.principalAmount + this.interestAmount;
  total: number = this.totalAmount;
  interest: number = this.interestAmount;
  principal: number = this.principalAmount;

  onInputChange(e: any) {
    if (e.value >= this.repaymentAmount) {
      // sliding right
      this.repaymentAmount = e.value;
      if (this.repaymentAmount <= this.interest) {
        this.interestAmount = this.interest - this.repaymentAmount;
        this.totalAmount = this.total - this.repaymentAmount;
      } else if (this.repaymentAmount > this.interest) {
        this.principalAmount =
          this.principal - (this.repaymentAmount - this.interest);
        this.interestAmount = 0;
        this.totalAmount = this.total - this.repaymentAmount;
      }
    } else {
      // sliding left
      let flag: number = this.repaymentAmount - e.value;
      this.repaymentAmount = e.value;
      if (this.repaymentAmount >= this.interest) {
        this.principalAmount += flag;
        this.interestAmount = 0;
        this.totalAmount += flag;
      } else if (this.repaymentAmount < this.interest) {
        this.principalAmount = this.principal;
        this.totalAmount += flag;
        this.interestAmount = this.interest - this.repaymentAmount;
      }
    }
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
