import { Component, OnDestroy, OnInit } from "@angular/core";
import * as _ from "lodash";
import { DataStore } from "@app/core/store/app.store";
import { UserReducers } from "@app/core/store/reducers/user.reducer";
import { TransactionReducers } from "@app/core/store/reducers/transaction.reducer";
import {} from "@app/core/store/actions";
import {
  USER_EXTRA_DETAILS,
  GET_WALLET_TRANSACTION_LIST,
} from "@app/core/store/actions";

@Component({
  selector: "koppr-myaccount-component",
  templateUrl: "./myaccount.component.html",
  styleUrls: ["./myaccount.component.scss"],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ["date", "type", "amount", "mode"];
  userDetails: any;
  walletTransactionList: any;
  dataSource: any;
  initialState: any;
  constructor(
    private ds: DataStore,
    private user: UserReducers,
    private tR: TransactionReducers
  ) {
    this.initialState = this.ds.dataStore$.getValue();
  }

  ngOnInit() {
    this.tR.transactionReducer({ type: GET_WALLET_TRANSACTION_LIST });
    this.user.userReducer({
      type: USER_EXTRA_DETAILS,
      payload: { id: this.initialState.userInfo._id },
    });
    this.ds.dataStore$.subscribe((data) => {
      if (data.userExtraDetails) {
        this.userDetails = data.userExtraDetails;
      }

      this.walletTransactionList = _.get(
        data.userWalletTransactionList,
        "transaction_recs"
      );

      // filter data with no txn amount
      this.walletTransactionList = _.filter(
        this.walletTransactionList,
        (obj: any) => obj.trn_amount
      );

      //reverse wallet data
      this.walletTransactionList = _.reverse(this.walletTransactionList);

      if (!_.isEmpty(this.walletTransactionList)) {
        this.renderTable();
      }
    });
  }

  renderTable() {
    this.dataSource = _.slice(this.walletTransactionList, 0, 4);
  }

  ngOnDestroy() {}
}
