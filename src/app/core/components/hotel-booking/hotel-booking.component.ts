import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"; 
import { dateFormat } from 'highcharts';
interface Operator {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent implements OnInit {  
  inputForm: FormGroup;
  checkIn = new FormControl(new Date());
  checkOut = new FormControl(new Date());

  operators: Operator [] = [
    {value: 'airtel-0',viewValue: 'Airtel'},
    {value: 'vodafone-1',viewValue: 'Vodafone'},
    {value: 'jio-2',viewValue: 'Jio'},
    {value: 'Idea-3',viewValue: 'Idea'}
  ];
  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      destination: new FormControl(null, [Validators.required]),
      checkInDate: this.checkIn,
      checkoutDate: this.checkOut,
      guestNumber: new FormControl(null, [Validators.required]),  
    });
  }
 submit() {
    if (this.inputForm.valid) {
      
      
    }
  }

}
