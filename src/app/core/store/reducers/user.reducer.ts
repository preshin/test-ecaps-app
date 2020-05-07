import { successCommonData } from "./../commondata.store";
import { Injectable } from "@angular/core";
import { DataStore } from "../app.store";
import { ApiService } from "@app/core/services/api.service";
import {
  ADD_USER_INFO,
  LOADING,
  NOT_LOADING,
  USER_EXTRA_DETAILS,
} from "../actions";
import { LoadingReducers } from "./loading.reducer";
import { ToastReducers } from "./toast.reducer";
import * as _ from "lodash";

@Injectable()
export class UserReducers {
  constructor(
    private _dataStore: DataStore,
    private apiService: ApiService,
    private _loader: LoadingReducers,
    private toast: ToastReducers
  ) {}

  userReducer(action: any) {
    let state = this._dataStore.dataStore$.getValue();
    switch (action.type) {
      case ADD_USER_INFO:
        console.log("IN USER ADD");
        this._loader.loadingState({ type: LOADING });
        this.apiService
          .get("https://api-stage.paysack.com/demo/v1/employees/me", {})
          .subscribe(
            (data) => {
              this._dataStore.dataStore$.next({
                ...state,
                userInfo: data,
                loader: false,
              });
            },
            (error) => {
              this._dataStore.dataStore$.next({
                ...state,
                errorMessage: error,
                error: true,
                loader: false,
              });
            }
          );
        break;
      case USER_EXTRA_DETAILS:
        this._loader.loadingState({ type: LOADING });
        state = this._dataStore.dataStore$.getValue();
        this.apiService.get(`main/users/update/${action.payload.id}`).subscribe(
          ({ data }: any) => {
            localStorage.setItem("userExtraDetails", JSON.stringify(data));

            this._dataStore.dataStore$.next({
              ...state,
              ...successCommonData,
              userExtraDetails: data,
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
      default:
        console.log("IN USER DEFAULT");
        this._dataStore.dataStore$.next({
          ...state,
        });
    }
  }
}
