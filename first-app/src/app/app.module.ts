import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { CalculatorOneComponent } from './calculator/calculatorOne.component';
import { CalculatorTwoComponent } from './calculator/calculatorTwo.component';
import {CalculatorResultComponent} from './calculator/calculatorResult.component';

@NgModule({ // the @NgModule decoration is associated with the AppModule class. @NgModule makes your class a module.
  declarations: [ // a module is like a package present in java. a package will have classes in it. similarly, all the
                  // angular entities that deal with UI are declared in declaration. i.e. components, pipes, directives are 
                  // to be declared in declarations
    AppComponent,
    GreetComponent,
    CalculatorOneComponent,
    CalculatorTwoComponent,
    CalculatorResultComponent
  ],
  imports: [  // what are the modules that my module depends on.
    BrowserModule,
    FormsModule
  ],
  providers: [], // all angular non UI entities are mentioned here. i.e. services.
  bootstrap: [AppComponent] // i want my application composition to start from AppComponent.
})
export class AppModule { }

