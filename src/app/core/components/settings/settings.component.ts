import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { DataStore } from "@app/core/store/app.store";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userDetails: any;

  constructor(
    private ds: DataStore, 
  ) { }

  ngOnInit() {
    this.ds.dataStore$.subscribe((data) => {
      if (data.userExtraDetails) {
        this.userDetails = data.userExtraDetails;
      }
    });
  }

}
