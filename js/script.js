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
        this.clear()
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
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }

    //metodo para clique nos numeros e nos outros operadores
    
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
)

for(const numberButton of numberBtn){
    numberButton.addEventListener('click', () =>{
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
}
//para todo botao na constante numberBtn, quando for clicado, o metood appendNumber sera acionado

//botao delete del
deleteBtn.addEventListener('click', () =>{
    calculator.clear();
    calculator.updateDisplay();
})