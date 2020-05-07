import { Component, OnInit } from '@angular/core';
import { DataStore } from "@app/core/store/app.store";


@Component({
  selector: 'app-view-transaction-details',
  templateUrl: './view-transaction-details.component.html',
  styleUrls: ['./view-transaction-details.component.scss']
})
export class ViewTrasactionDetailsComponent implements OnInit {
  viewDetails: any;

  constructor(
    private ds: DataStore,
  ) { }

  ngOnInit() {
    this.ds.dataStore$.subscribe((data) => {
      console.log(data)
      if(data.selectedTransactionItem){
        this.viewDetails = data.selectedTransactionItem
        console.log(this.viewDetails)
      }
    });
  }

}
