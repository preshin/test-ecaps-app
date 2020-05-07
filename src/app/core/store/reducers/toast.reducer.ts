import { Injectable } from "@angular/core";
import { DataStore } from "../app.store";
import { ApiService } from "@app/core/services/api.service";
import {
  RESET_STATE,
  LOADING,
  NOT_LOADING,
  SHOW_TOAST,
  HIDE_TOAST,
  TOAST_SOMETHING_WRONG
} from "../actions";
import { catchCommonData } from "../commondata.store";
import * as _ from "lodash";
import { LoggerService } from "utils";

@Injectable()
export class ToastReducers {
  constructor(private _dataStore: DataStore, private logger: LoggerService) {}

  toastState(action: any) {
    const state = this._dataStore.dataStore$.getValue();
    switch (action.type) {
      case SHOW_TOAST:
        this.logger.info("IN TOAST TRUE");
        this._dataStore.dataStore$.next({
          ...state,
          toast: true,
          toastTitle: action.payload.title,
          toastMessage: action.payload.message,
          toastType: action.payload.type
        });
        break;
      case HIDE_TOAST:
        this.logger.info("IN TOAST FALSE");
        this._dataStore.dataStore$.next({
          ...state,
          toast: false,
          toastTitle: null,
          toastMessage: "",
          toastType: "error"
        });
        break;
      case TOAST_SOMETHING_WRONG:
        this.logger.info("IN TOAST FALSE");
        this._dataStore.dataStore$.next({
          ...state,
          toast: true,
          toastMessage: "Something Went Wrong!",
          toastType: "warning"
        });
        break;
      default:
        this.logger.info("IN TOAST DEFAULT");
        this._dataStore.dataStore$.next({
          ...state,
          toast: false,
          toastTitle: null,
          toastMessage: "",
          toastType: "error"
        });
    }
  }

  commonCatchToast(error: { response: object }) {
    const state = this._dataStore.dataStore$.getValue();
    const catchErrormessage = _.get(error.response, "data.error", null);
    if (catchErrormessage)
      this._dataStore.dataStore$.next({
        ...state,
        ...catchCommonData,
        toastMessage: catchErrormessage
      });
    else {
      this.toastState({ type: TOAST_SOMETHING_WRONG });
      this._dataStore.dataStore$.next({
        ...state,
        loader: false
      });
    }
  }
}
