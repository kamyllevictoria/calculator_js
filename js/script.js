const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("[data-equal]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-p]");
const currentOperandTextElement = document.querySelector("[data-c]");
console.log(numberBtn)
//manipulamos com o constructor o elemento de texto das consts acima para passarmos para um numero de fato, pois é apenas uma string!
class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    //para fazermos a fomatação com pontos,convertemos o numero para string
    formatDisplay(number){
        const stringNumber = number.toString();
        const intDigit = parseFloat(stringNumber.split('.')[0]);
        const decimalDigit = stringNumber.split('.')[1];
        let intDisplay;

        if(isNaN(intDigit)){
            intDisplay = ''
        }
        else{
            intDisplay = intDigit.toLocaleString('en' ,{
                maximumFractionDigits: 0
            })
        }
        if(decimalDigit != null){
            return `${intDisplay}.${decimalDigit}`;
        }
        else{
            return intDisplay;
        }
    }



    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }


    calculate(){
        let result;
        //conversao de string para float
        const previousOperandFloat = parseFloat(this.previousOperand);
        const currentOperandFloat = parseFloat(this.currentOperand);

        if(isNaN(previousOperandFloat) || isNaN(currentOperandFloat)){
            return; //se os numeros nao forem 'numeros' de fato, a função não é executada!
        }
        switch(this.operation){
            case '+':
                result = previousOperandFloat + currentOperandFloat;
                break;
            case '-':
                result = previousOperandFloat - currentOperandFloat;
                break;
            case '*':
                result = previousOperandFloat * currentOperandFloat;
                break;
            case '/':
                result = previousOperandFloat / currentOperandFloat;
                break;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';

    }

    //escolha da operação matematica
    chooseOperation(operation){
        if(this.currentOperand == ''){
            return;
        }

        if(this.previousOperand != '')
        {
            this.calculate()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        //mostra o sinal matematico na tela no previousoperation
        
    }

    appendNumber(number){
        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

    //metodo clear, botao AC
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        //guardamos o valor das variaveis, agora devemos mostrar na tela
    }

    updateDisplay(){
        this.previousOperandTextElement.innerText = `${this.formatDisplay(this.previousOperand)} ${this.operation || '' }`; //caso nao exitsa uma operacao de fato, iria aparecer a mensagem 'undefined', mas colocamos um operador relacional ou (||) com caracteres vazios, logo, nao aparece a mensagem!
        this.currentOperandTextElement.innerText = this.formatDisplay(this.currentOperand);
    }//atualiza os elementos na tela com o html
    //metodo para clique nos numeros e nos outros operadores
    
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement);

for(const numberButton of numberBtn){
    numberButton.addEventListener('click', () =>{
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
}//para todo botao na constante numberBtn, quando for clicado, o metood appendNumber sera acionado

for(const operationButton of operationBtn){
    operationButton.addEventListener('click', () =>{
        calculator.chooseOperation(operationButton.innerText);
        calculator.updateDisplay(); 
    })
}//para todo botao na constante operationBtn, quando for clicado, o metood chooseOperation sera acionado

//botao delete del
deleteBtn.addEventListener('click', () =>{
    calculator.clear();
    calculator.updateDisplay();
})

equalBtn.addEventListener('click', () =>{
    calculator.calculate();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click' , () =>{
    calculator.delete();
    calculator.updateDisplay();
})