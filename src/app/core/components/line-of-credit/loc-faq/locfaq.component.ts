import { Component, OnInit } from "@angular/core";

export interface Faqs {
  cols: number;
  rows: number;
  question: string;
  answer: string;
}

@Component({
  selector: "koppr-loc-faq",
  templateUrl: "./locfaq.component.html",
  styleUrls: ["./locfaq.component.scss"]
})
export class LocFaqComponent implements OnInit {
  faqs: Faqs[] = [
    {
      cols: 1,
      rows: 1,
      question: "Faq one",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      cols: 1,
      rows: 1,
      question: "Faq two",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      cols: 1,
      rows: 1,
      question: "Faq three",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      cols: 1,
      rows: 1,
      question: "Faq four",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      cols: 1,
      rows: 1,
      question: "Faq five",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];
  constructor() {}

  ngOnInit() {}
}
