import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	//result : number = 0;
	calculator : CalculatorModel = new CalculatorModel();

}