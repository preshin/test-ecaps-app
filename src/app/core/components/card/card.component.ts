import { Component, OnInit } from "@angular/core";

@Component({
  selector: "koppr-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }

    return value;
  }

  constructor() {}

  ngOnInit() {}
}
