import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"; 


@Component({
  selector: 'app-ledgers',
  templateUrl: './ledgers.component.html',
  styleUrls: ['./ledgers.component.scss']
})
export class LedgersComponent implements OnInit {
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
