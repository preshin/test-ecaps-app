import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface Operator {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-landline-bill',
  templateUrl: './landline-bill.component.html',
  styleUrls: ['./landline-bill.component.scss']
})
export class LandlineBillComponent implements OnInit {
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
      customerId: new FormControl(null, [Validators.required]),    
    });
  }
 submit() {
    if (this.inputForm.valid) {
      
      
    }
  }
}
