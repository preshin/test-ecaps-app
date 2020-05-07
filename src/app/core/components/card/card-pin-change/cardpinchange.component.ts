import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "koppr-card-pin-change",
  templateUrl: "./cardpinchange.component.html",
  styleUrls: ["./cardpinchange.component.scss"]
})
export class CardPinChangeComponent implements OnInit {
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

  onCardPinChange(pin) {
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
