import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface Operator {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-loan-pay',
  templateUrl: './loan-pay.component.html',
  styleUrls: ['./loan-pay.component.scss']
})
export class LoanPayComponent implements OnInit {
  inputForm: FormGroup;
  operators: Operator [] = [
    {value: 'airtel-0',viewValue: 'Airtel'},
    {value: 'vodafone-1',viewValue: 'Vodafone'},
    {value: 'jio-2',viewValue: 'Jio'},
    {value: 'Idea-3',viewValue: 'Idea'}
     ];

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      name: new FormControl(null, [Validators.required,
        Validators.pattern('[a-zA-Z ]*')]), 
      loanAccountNo: new FormControl(null, [Validators.required]), 
    });
  }
 submit() {
  if (this.inputForm.valid) {
    
    
  }
  }
}
