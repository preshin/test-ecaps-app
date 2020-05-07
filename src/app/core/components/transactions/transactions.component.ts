import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { DataStore } from "@app/core/store/app.store";
import { TransactionReducers } from "@app/core/store/reducers/transaction.reducer";
import {} from "@app/core/store/actions";
import {
  GET_WALLET_TRANSACTION_LIST,
  SAVE_SELECTED_TRANSACTION_ITEM,
} from "@app/core/store/actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ["date", "type", "amount", "mode", "arrow"];
  dataSource: any;

  constructor(
    private ds: DataStore,
    private tR: TransactionReducers,
    private route: Router
  ) {}

  ngOnInit() {
    this.tR.transactionReducer({ type: GET_WALLET_TRANSACTION_LIST });
    this.ds.dataStore$.subscribe((data) => {
      this.dataSource = _.get(
        data.userWalletTransactionList,
        "transaction_recs"
      );

      // filter data with no txn amount
      this.dataSource = _.filter(this.dataSource, (obj: any) => obj.trn_amount);

      //reverse wallet data
      this.dataSource = _.reverse(this.dataSource);
    });
  }

  viewDetailsRoute(element: any) {
    if (element) {
      this.tR.transactionReducer({
        type: SAVE_SELECTED_TRANSACTION_ITEM,
        payload: element,
      });
      this.route.navigate(["/", "transaction-details"]);
    }
  }
}
