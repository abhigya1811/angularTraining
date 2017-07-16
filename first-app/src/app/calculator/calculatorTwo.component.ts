import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	//result : number = 0;
    selectedValue:string ='';
	calculator2 : CalculatorModel = new CalculatorModel();

    // selectOperation(){
    //   /*  if(this.selectedValue === "add"){
    //         console.log("entered add");
    //         this.calculator2.add();
    //     }else if(this.selectedValue === "subtract"){
    //         this.calculator2.subtract();
    //     }else if(this.selectedValue === "multiply"){
    //         this.calculator2.multiply();
    //     }else if(this.selectedValue === "divide"){
    //         this.calculator2.divide();
    //     }*/
    
    // this.calculator2[this.selectedValue]();
    // }
}