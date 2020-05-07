import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "koppr-otp-component",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.scss"]
})
export class OtpComponent implements OnInit, OnDestroy {
  otp: string;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;

  config = {
    allowNumbersOnly: true,
    length: 4
  };

  onOtpChange(otp) {
    this.otp = otp;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
