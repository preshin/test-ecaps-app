import { successCommonData } from "./../commondata.store";
import { Injectable } from "@angular/core";
import { DataStore } from "../app.store";
import { ApiService } from "@app/core/services/api.service";
import {
  LOADING,
  NOT_LOADING,
  GET_WALLET_TRANSACTION_LIST,
  SAVE_SELECTED_TRANSACTION_ITEM,
  SHOW_TOAST
} from "../actions";
import { Router } from "@angular/router";
import { LoadingReducers } from "./loading.reducer";
import { ToastReducers } from "./toast.reducer";
import * as _ from "lodash";

@Injectable()
export class TransactionReducers {
  constructor(
    private _dataStore: DataStore,
    private apiService: ApiService,
    private _loader: LoadingReducers,
    private toast: ToastReducers,
    private router: Router,
  ) {}

  transactionReducer(action: any) {
    let state = this._dataStore.dataStore$.getValue();
    switch (action.type) {
      case GET_WALLET_TRANSACTION_LIST:
        state = this._dataStore.dataStore$.getValue();
        this._loader.loadingState({ type: LOADING });
        this.apiService
          .get(`main/wallets/transactions/${state.userInfo._id}`)
          .subscribe(
            (data: any) => {
              this._dataStore.dataStore$.next({
                ...state,
                ...successCommonData,
                userWalletTransactionList: data,
              });
            },
            (error) => {
                console.log(error);
                this.toast.commonCatchToast(
                  _.get(error, "message", "Something Went Wrong!!")
                );
            }
          );
        break;
        case SAVE_SELECTED_TRANSACTION_ITEM:
          state = this._dataStore.dataStore$.getValue();
          this._dataStore.dataStore$.next({
            ...state,
            selectedTransactionItem: action.payload
          });
        break;
      default:
      console.log("IN TRANSACTION DEFAULT");
      this._dataStore.dataStore$.next({ ...state });
    }
  }
}
