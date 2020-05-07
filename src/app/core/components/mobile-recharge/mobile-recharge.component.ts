import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface Operator {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mobile-recharge',
  templateUrl: './mobile-recharge.component.html',
  styleUrls: ['./mobile-recharge.component.scss']
})
export class MobileRechargeComponent implements OnInit {
  inputForm: FormGroup;
  types: string[] = ['Prepaid', 'Postpaid'];
  operators: Operator [] = [
    {value: 'airtel-0',viewValue: 'Airtel'},
    {value: 'vodafone-1',viewValue: 'Vodafone'},
    {value: 'jio-2',viewValue: 'Jio'},
    {value: 'Idea-3',viewValue: 'Idea'}
  ];


  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      mobileNumber: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(10),
        Validators.maxLength(10)]),   
      amount: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]), 
  
    });
  }
 submit() {
    if (this.inputForm.valid) {
      
      
    }
  }
}
