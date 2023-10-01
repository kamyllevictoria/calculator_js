const previousOperationText = document.querySelector("#p_operation")
const currentOperationText = document.querySelector("#c_operation")
const buttons = document.querySelectorAll("#btn_container button")
console.log(buttons)

//Usamos constantes para declarar numeros pre-existentes, como observado nas teclas da calculadora. esse nome grande é o nome da nossa constante e nao uma propriedade js!

class calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = "" //o que o usuario digita na hora
    }

     //nesse caso, o constructor junto com o this, inicializam valores passados à classe calculator para criar instancias  
    
    //adiciona valores
    addDigit(digit){
        //ERROS: observa se operação ja possui um ponto de casa decimal;
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return
        }
        
        this.currentOperation = digit
        this.updateScreen()
    }

    //muda os valores da tela
    updateScreen(){
        this.currentOperationText.innerText +=this.currentOperation
    }
    //updateScreen atualiza a tela conforme os valores informados, ou seja, mostra na interface
    //colocamos o numero da nossa operação atual dentro da variavel operação atual com a concatenação de valores +=

}

//mudamos o currentoperation para digit, pois, a operaçao atual sera definida quando for digitado algo, ou seja, o digito


const calc = new calculator(previousOperationText, currentOperationText) 
//nesse caso, criamos um objeto que sera usado pela nossa classe que possui 2 parametros informados no constructor o previous e o current


buttons.forEach((btn) => {
    btn.addEventListener("click" ,(e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value === "."){
            calc.addDigit(value) //se o valor clicado nas teclas for um numero maior do que 0 (ele tambem ja é convertido para numer por conta do sinal + e, se for numero com ponto(decimal), mostramos o seu valor.)
        } else{
            console.log("Op: " + value)
            //se nao conseguirmos mostrar a operação acima, mostramos a mensagem "Op:" + value
        }
    })
}
)
// o forEach é um metodo em javascript para percorrer um array e executar um retorno de cada um deles, ou seja, é como se fosse uma alternativa do loop "for"
//O objeto do evento addEventListener é o (e)

//criei uma constante buttons, que ira pegar cada elemento com o id #btn_container button. Com o buttons.forEach((btn), percorro todos os elementos que possuem a id informada na variavel buttons.
//Com o parametro btn, adiciono  um evento com um 'click' que sera uma funcao de clique em um elemento btn. P objeto do evento addeventlistener será (e), logo, crio uma constante chamada value para receber o evento target.innerText, que será capaz de detectar qual botao foi clicado