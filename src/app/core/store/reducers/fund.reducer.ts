import { successCommonData } from "./../commondata.store";
import { Injectable } from "@angular/core";
import { DataStore } from "../app.store";
import { ApiService } from "@app/core/services/api.service";
import {
  LOADING,
  NOT_LOADING,
  INITIATE_FUND_TRANSFER,
  PROCESS_FUND_TRANSFER,
  SHOW_TOAST
} from "../actions";
import { Router } from "@angular/router";
import { LoadingReducers } from "./loading.reducer";
import { ToastReducers } from "./toast.reducer";
import * as _ from "lodash";

@Injectable()
export class FundReducers {
  constructor(
    private _dataStore: DataStore,
    private apiService: ApiService,
    private _loader: LoadingReducers,
    private toast: ToastReducers,
    private router: Router,
  ) {}

  fundReducer(action: any) {
    let state = this._dataStore.dataStore$.getValue();
    switch (action.type) {
      case INITIATE_FUND_TRANSFER:
        state = this._dataStore.dataStore$.getValue();
        this._loader.loadingState({ type: LOADING });
        this.apiService
        .post(`main/fundtransfer/init/${action.payload.id}`, 
        _.omit(action.payload, "id"))
        .subscribe(
          (data: any) => {
            this._dataStore.dataStore$.next({
              ...state,
              ...successCommonData,
              fundTransferInitiate: data,
            });
            this.router.navigate(["/verify-money-transfer"]);
          },
          (error) => {
            console.log(error);
            this.toast.commonCatchToast(
              _.get(error, "message", "Something Went Wrong!!")
            );
          }
        );
        break;

        case PROCESS_FUND_TRANSFER:
        state = this._dataStore.dataStore$.getValue();        
        this._loader.loadingState({ type: LOADING });
        this.apiService
        .post(`main/fundtransfer/verify/${action.payload.id}`)
        .subscribe(
          (response: any) => {
            this.toast.toastState({
              type: SHOW_TOAST,
              payload: { message: response.message, type: "success" },
            });

            this._dataStore.dataStore$.next({
              ...state,
              ...successCommonData,
            });
            this.router.navigate(["/payments"]);
          },
          (error) => {
            this.toast.commonCatchToast(
              _.get(error, "message", "Something Went Wrong!!")
            );
          }
        );
        break; 
      default:
      console.log("IN FUND DEFAULT");
      this._dataStore.dataStore$.next({ ...state });
    }
  }
}
