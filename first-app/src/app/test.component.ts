import { Component } from "@angular/core" ;

@Component({
    selector:'app-test',

    template:`<h2>Your Team</h2>`,
    styles:[
       `
       h2{
           color:darkgreen;
       }
       h3{
        color:darkblue;
    }
       `
    ]
    
})
export class TestComponent{

}