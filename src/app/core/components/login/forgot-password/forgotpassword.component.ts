import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms"; 
import { FORGOT_PASSWORD } from "@app/core/store/actions";
import { LoginReducers } from "@app/core/store/reducers/login.reducer";

@Component({
  selector: "forgotpassword-component",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.scss"]
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  forgotPasswordForm: FormGroup;

  constructor(private _login: LoginReducers) {}

  fotgotPassword() {
    // this._login.loginReducer({
    //   type: FORGOT_PASSWORD,
    //   payload: {
    //     email: this.forgotPasswordForm.controls[
    //       "email"
    //     ].value.toLocaleLowerCase()
    //   }
    // });
  }

  public ngOnInit() {
    this.forgotPasswordForm = new FormGroup({       
      email: new FormControl(null, [Validators.required,
        Validators.email]),
    });
  }

  public ngOnDestroy() {}

   
}
