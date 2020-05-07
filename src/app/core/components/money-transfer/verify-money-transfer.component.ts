import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  PROCESS_FUND_TRANSFER
} from "./../../store/actions/index";
import * as _ from "lodash";
import { FundReducers } from "@app/core/store/reducers/fund.reducer";
import { DataStore } from "@app/core/store/app.store";

@Component({
  selector: "app-verify-money-tranfer",
  templateUrl: "./verify-money-transfer.component.html",
  styleUrls: ["./verify-money-transfer.component.scss"],
})
export class VerifyMoneyTransferComponent implements OnInit, OnDestroy {
  transferDetails: any;

  constructor(
    private ds: DataStore,
    private fR: FundReducers
    ) {}

  submit(){
    if(this.transferDetails._id){
      this.fR.fundReducer({
        type: PROCESS_FUND_TRANSFER,
        payload: {
          id: this.transferDetails._id,             
        }
      }); 
    }
  }

  ngOnInit() {
    this.ds.dataStore$.subscribe((data) => {
      if (data.fundTransferInitiate) {
        this.transferDetails = data.fundTransferInitiate;
      }
    });
  }

  ngOnDestroy() {
  }
}
