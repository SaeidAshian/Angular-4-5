import { Component, OnInit , OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  starwidth:number;
  @Input('starrating') rating:number;
  constructor() {
    
   }

  ngOnInit() {
  }
  ngOnChanges(){
      
    
  
   this.starwidth = this.rating * 93   / 5;
  }

}
