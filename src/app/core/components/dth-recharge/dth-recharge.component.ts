import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface Operator {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dth-recharge',
  templateUrl: './dth-recharge.component.html',
  styleUrls: ['./dth-recharge.component.scss']
})
export class DthRechargeComponent implements OnInit {
  inputForm: FormGroup;
  operators: Operator [] = [
    {value: 'airtel',viewValue: 'Airtel'},
    {value: 'vodafone-1',viewValue: 'Vodafone'},
    {value: 'jio-2',viewValue: 'Jio'},
    {value: 'Idea-3',viewValue: 'Idea'}
     ];

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      customerId: new FormControl(null, [Validators.required]),  
      amount: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]), 
  
    });
  }
  submit() {
    if (this.inputForm.valid) {
      
      
    }
  }

}
