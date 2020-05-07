import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  category: string;
  route: string;
  icon: string;
}


@Component({
  selector: 'koppr-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['./pot.component.scss']
})
export class PotComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: '#ffffff', category: 'Food', route: '', icon: 'room_service'},
    {text: 'Two', cols: 1, rows: 1, color: '#ffffff', category: 'Travel', route: '', icon: 'card_travel'},
    {text: 'Three', cols: 1, rows: 1, color: '#ffffff', category: 'Fuel', route: '', icon: 'directions_car'},
    {text: 'Four', cols: 1, rows: 1, color: '#ffffff', category: 'Car', route: 'viewpots', icon: 'directions_car'}
    ];
  constructor() { }

  ngOnInit() {
    
  }

}
