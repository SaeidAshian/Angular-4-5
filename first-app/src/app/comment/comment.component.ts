import { Component, OnInit } from '@angular/core';
import { IComment } from '../icomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
 comments:IComment[]=[];
  constructor() { }

  ngOnInit() {
  }

}
