/*this is the business model. state and behaviour of a calculator is 2 operands and a result*/
export class CalculatorModel{
	result : number = 0;
	operand1 : number = 0;
	operand2 : number = 0;

	add(){
		this.result = this.operand1 + this.operand2;
        this.reset();
	}
	subtract(){
		this.result = this.operand1 - this.operand2;
        this.reset();
	}
	multiply(){
		this.result = this.operand1 * this.operand2;
        this.reset();
	}
	divide(){
		this.result = this.operand1 / this.operand2;
        this.reset();
	}
    reset(){
        this.operand1=0;
        this.operand2=0;
    }
}