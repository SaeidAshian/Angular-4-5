import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 name:string = "saeid";
 family:string = 'ashian';
 Id:number=123554;
 allowclick=false;
 inum:number = 0;
 emptyvalue:string =null;
 result=null;
 result1= "";
 result2= "";
 result3= "";
 result4= "";
pre1:string= "";
pre2:string= "";
pre3:string= "";
pre4:string= "";
noresult:string = "";
colorCode:number;
 
 constructor(){
  this.colorCode = Math.random();
  //setTimeout(() => {
    //if(this.result != ''  )
   // this.allowclick=true;
  //}, 5000);
 }
 ngOnInit(){

 }
 getColor(){
   return this.colorCode > 0 && this.colorCode <= 0.25 ?'cyan':
   this.colorCode > 0.25 && this.colorCode <= 0.5 ? 'dimgrey':
   this.colorCode > 0.5 && this.colorCode <= 0.75 ? 'greenyellow':'palegreen';
   
 }
 onclickBtn(){
  if(this.result !='' ){
  this.inum ++;
   switch (this.inum) {
     case 1:
       this.pre1=this.result
       this.result =''
       this.noresult =''
       break;
       case 2:
       this.pre2=this.result
       this.result=''
       this.noresult =''
       break;
       case 3:
       this.pre3=this.result
       this.result =''
       this.noresult =''
       break;
       case 4:
       this.pre4=this.result
       this.result =''
       break;
   
     default:
     this.noresult="you are finish"
       break;
   }
  } else this.noresult="you must enter the number"
    
 }
 gettext(event:Event){
   this.result=(<HTMLInputElement>event.target).value;
   if(this.result !=''  )
    this.allowclick=true;
   
   
   
 }
 gettext1(event:Event){
  this.result1=(<HTMLInputElement>event.target).value;
}
gettext2(event:Event){
  this.result2=(<HTMLInputElement>event.target).value;
}
gettext3(event:Event){
  this.result3=(<HTMLInputElement>event.target).value;
}
gettext4(event:Event){
  this.result4=(<HTMLInputElement>event.target).value;
}
 getName(){
  return this.Id;
 }

}
