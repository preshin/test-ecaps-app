import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  INITIATE_FUND_TRANSFER
} from "./../../store/actions/index";
import * as _ from "lodash";
import { FundReducers } from "@app/core/store/reducers/fund.reducer";
import { DataStore } from "@app/core/store/app.store";

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit { 
  inputForm: FormGroup; 
  bankAccountType = new FormControl('savings');
  userId:string = "";

  constructor(
    private _dataStore: DataStore,
    private fR: FundReducers
  ) { }

  submit() {
    if (this.inputForm.valid) {
      if (!_.isEmpty(this.userId)) {
        this.fR.fundReducer({
          type: INITIATE_FUND_TRANSFER,
          payload: {
            id: this.userId,
            beneficiary_account_number : this.inputForm.controls.accountNumber.value,  
            beneficiary_account_type : this.inputForm.controls.bankAccountType.value,
		        beneficiary_ifsc: this.inputForm.controls.ifc.value,
            beneficiary_amount: this.inputForm.controls.amount.value,
            beneficiary_bank_name: this.inputForm.controls.bankName.value,
            beneficiary_bank_branch: this.inputForm.controls.bankBranch.value,
            beneficiary_name: this.inputForm.controls.beneficiaryName.value,
            beneficiary_phone: this.inputForm.controls.beneficiaryMobile.value,
            beneficiary_email: this.inputForm.controls.beneficiaryEmail.value,
            sender_name: this.inputForm.controls.senderName.value,
            sender_email: this.inputForm.controls.senderEmail.value,
            sender_phone: this.inputForm.controls.senderMobile.value,
            additional_amount: this.inputForm.controls.additionalAmount.value             
          }
        });       
      }       
    }
  }

  ngOnInit() {
    this._dataStore.dataStore$.subscribe((data) => {
      if (data.userExtraDetails) {
        this.userId = data.userExtraDetails._id;
      }
    });

    this.inputForm = new FormGroup({
      beneficiaryName: new FormControl(null, [Validators.required,
        Validators.pattern('[a-zA-Z ]*')]), 
      accountNumber: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]),
      bankName: new FormControl(null, [Validators.required]), 
      bankBranch: new FormControl(null, [Validators.required]),
      bankAccountType: this.bankAccountType, 
      ifc: new FormControl(null, [Validators.required]),
      beneficiaryMobile: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(10),
        Validators.maxLength(10)]),
      beneficiaryEmail: new FormControl(null, [Validators.required,
        Validators.email]),
      amount: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]), 
      senderName: new FormControl(null, [Validators.required,
        Validators.pattern('[a-zA-Z ]*')]),
      senderEmail: new FormControl(null, [Validators.required,
        Validators.email]),
      senderMobile: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(10),
        Validators.maxLength(10)]),
      additionalAmount: new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]\d*$/)]),
    });
  }

 checkIfsc() {}

 
}