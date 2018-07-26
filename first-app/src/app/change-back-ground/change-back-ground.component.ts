import { Component, OnInit } from '@angular/core';
import { TouchSequence } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-change-back-ground',
  templateUrl: './change-back-ground.component.html',
  styleUrls: ['./change-back-ground.component.css']
})
export class ChangeBackGroundComponent implements OnInit {
colorCode:number;
  constructor() { 
    this.colorCode = Math.random();
  }

  ngOnInit() {
  }

  getColor(){
    return this.colorCode > 0.5 ? 'cyan' :'greenyellow';
  }
}
