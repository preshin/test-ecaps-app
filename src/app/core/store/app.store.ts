import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataStore {
  public dataStore$: BehaviorSubject<any>;

  public initialState: Object = {
    userInfo: JSON.parse(localStorage.getItem("userData")),
    userExtraDetails: JSON.parse(localStorage.getItem("userExtraDetails")),
    loader: false,
    loadingMessage: "",
    toast: false,
    toastType: "error",
    toastMessage: "",
    toastTitle: null,
    isSuccess: false,
    card: {
      assignCard: {},
      cardDetails: {},
      isLocked: false,
    },
    userWalletTransactionList: {},
    fundTransferInitiate: {},
    selectedTransactionItem: {},
  };

  constructor() {
    this.dataStore$ = new BehaviorSubject(this.initialState);
  }
}
