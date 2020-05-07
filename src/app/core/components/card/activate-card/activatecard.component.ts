import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "koppr-activate-card",
  templateUrl: "./activatecard.component.html",
  styleUrls: ["./activatecard.component.scss"]
})
export class ActivateCardComponent implements OnInit {
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
