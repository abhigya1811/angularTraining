import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // where do the presentation and behaviour of the component have to be applied. To define
                        // where these would be applied, we mention the selector. any css3 selector can be used here. 
                        // here we are using an element selector. if you come across an element by the name app-root, then apply 
                        // the presentation and baehaviour of this component there.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // the class is where the component's state and behaviour is defined.
  //title = 'Abhigya';
  // message: string = "";

  // onButtonClick(username){
  //   // let name=prompt("enter your name");
  //   this.message= `Hi! ${username} , Welcome`;
  // }
}