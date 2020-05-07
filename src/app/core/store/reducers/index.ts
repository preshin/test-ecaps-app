import { ToastReducers } from "./toast.reducer";
import { LoginReducers } from "./login.reducer";
import { UserReducers } from "./user.reducer";
import { ResetStateReducers } from "./resetstate.reducer";
import { LoadingReducers } from "./loading.reducer";
import { FundReducers } from "./fund.reducer";
import { TransactionReducers } from "./transaction.reducer";

export const rootReducers = [
  UserReducers,
  ResetStateReducers,
  LoadingReducers,
  LoginReducers,
  ToastReducers,
  FundReducers,
  TransactionReducers
];
