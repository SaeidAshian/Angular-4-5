import { Component, OnInit , OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { IUser } from '../user';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  starwidth:number;
  @Output() inum1:number = 5;
  @Input('starrating') rating:number;
  @Output() starClicked = new EventEmitter<IUser>();
  
  person:IUser={
    name : 'Saeid',
    like:this.rating,
    Family:'Ashian'
    
  };
  constructor() {
    
   }

  ngOnInit() {
  }
  ngOnChanges(){
     this.starwidth = this.rating * 91 / 5;
  }
  onStartClicked(){
    this.person.like = this.rating;
    this.starClicked.emit(this.person);
    this.inum1=10;
  }

}
