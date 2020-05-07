import { Component, OnInit } from "@angular/core";

// export interface ClaimDetails {
//   cols: number;
//   rows: number;
//   date: Date;
//   category: string;
//   amount: number;
//   status: string;
//   icon: string;
// }

@Component({
  selector: "koppr-claim-details",
  templateUrl: "./claimdetails.component.html",
  styleUrls: ["./claimdetails.component.scss"]
})
export class ClaimDetailsComponent implements OnInit {
  // claimDetails: ClaimDetails[] = [
  //   {
  //     cols: 1,
  //     rows: 1,
  //     date: new Date(),
  //     category: 'Fuel',
  //     amount: 1000,
  //     status: 'Approved',
  //     icon: 'done'
  //   }
  // ]
  date: Date = new Date();
  constructor() {}

  ngOnInit() {}
}
