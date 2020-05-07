import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface Operator {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-datacard-recharge',
  templateUrl: './datacard-recharge.component.html',
  styleUrls: ['./datacard-recharge.component.scss']
})
export class DatacardRechargeComponent implements OnInit {
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
      cardNumber: new FormControl(null, [Validators.required]),  
      amount: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]), 
  
    });
  }
 submit() {
  if (this.inputForm.valid) {
    
    
  }
  }
}
