import { Component } from '@angular/core';
@Component({
    selector: 'greet',
    template: /*`<div>
  <label for="">Name:</label>
  <input type="text" #referenceOfTextBox>
  <input type="button"  value="Greet" (click)="onButtonClick(referenceOfTextBox.value)">
    </div>
  <h1>
    {{message}}
  </h1>`*/
  `
		<div>
		    <label for="">Name :</label>
		    <input type="text" [(ngModel)]="username">
		    <input type="button" value="Greet" (click)="onButtonClick()">
		  </div>
		  <h1>
		    {{message}}
		  </h1>
	`
})
export class GreetComponent{
    message: string = "";
    username: string='';
    onButtonClick(username){
    // let name=prompt("enter your name");
   //  this.message= `Hi! ${username} , Welcome`;

   this.message= `Hi! ${this.username} , Welcome`;
   this.username='';
  }



}