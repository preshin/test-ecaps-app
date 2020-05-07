import { Component, OnInit } from "@angular/core";
import { DataStore } from "@app/core/store/app.store";
import * as _ from "lodash";



@Component({
  selector: "koppr-feed",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"]
})
export class PaymentsComponent implements OnInit {
  Arr = Array; //Array type captured in a variable
  num: number = 3;
  userData: any;
  loading: boolean = false;
  userDetails: any;
  constructor(
    private _dataStore: DataStore,
  ) {}

  ngOnInit() {
    this._dataStore.dataStore$.subscribe((data) => {
      if (data.userExtraDetails) {
        this.userDetails = data.userExtraDetails;
      }
    });
  }
}
