import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"; 

@Component({
  selector: 'app-earnings-loyalty',
  templateUrl: './earnings-loyalty.component.html',
  styleUrls: ['./earnings-loyalty.component.scss']
})
export class EarningsLoyaltyComponent implements OnInit {
  inputForm: FormGroup;
  start = new FormControl(new Date());
  end = new FormControl(new Date());

  constructor() { 
    this.inputForm = new FormGroup({
      startDate: this.start,
      endDate: this.end      
    });
  }

  ngOnInit() { 
  }

}
