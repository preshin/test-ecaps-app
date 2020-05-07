import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "koppr-deactivate-card",
  templateUrl: "./deactivatecard.component.html",
  styleUrls: ["./deactivatecard.component.scss"]
})
export class DeactivateCardComponent implements OnInit {
  pin: string;
  reTypePin: string;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;

  config = {
    allowNumbersOnly: true,
    isPasswordInput: true,
    length: 4
  };
  retypeConfig = {
    ...this.config,
    disableAutoFocus: true
  };

  onLastPinChange(pin) {
    this.pin = pin;
  }

  onRetypeCardPinChange(pin) {
    this.reTypePin = pin;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  constructor() {}

  ngOnInit() {}
}
