import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LOGIN, RESET_STATE } from "@app/core/store/actions";
import { ResetStateReducers } from "@app/core/store/reducers/resetstate.reducer";
import { AuthService } from "auth";
import { LoginReducers } from "@app/core/store/reducers/login.reducer";

@Component({
  selector: "signin-component",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SignInComponent implements OnInit, OnDestroy {
  hide: boolean = true;
  signInForm: FormGroup;

  constructor(
    private resetReducer: ResetStateReducers,
    private authService: AuthService,
    private loginReducer: LoginReducers
  ) {
    //clear state
    this.resetReducer.resetState({
      type: RESET_STATE,
      payload: {},
    });

    localStorage.setItem("token", "");
  }

  login() {
    if (this.signInForm.valid) {
      this.loginReducer.loginReducer({
        type: LOGIN,
        payload: {
          email: this.signInForm.controls["userId"].value.toLowerCase(),
          password: this.signInForm.controls["password"].value,
        },
      });
    }
  }

  logout(): void {
    localStorage.setItem("userData", null);
    localStorage.setItem("userExtraDetails", null);
    this.authService.logout("signin");
  }

  public ngOnInit() {
    this.logout();
    this.signInForm = new FormGroup({
      userId: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public ngOnDestroy() {}
}
