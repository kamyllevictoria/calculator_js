const previousOperationText = document.querySelector("#p_operation")
const currentOperationText = document.querySelector("#c_operation")
const buttons = document.querySelectorAll("#btn_container button")
console.log(buttons);

//Usamos constantes para declarar numeros pre-existentes, como observado nas teclas da calculadora. esse nome grande é o nome da nossa constante e nao uma propriedade js!

class calculator {

}

buttons.forEach((btn) => {
    btn.addEventListener("click" ,(e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value === "."){
            console.log(value) //se o valor clicado nas teclas for um numero maior do que 0 (ele tambem ja é convertido para numer por conta do sinal + e, se for numero com ponto(decimal), mostramos o seu valor.)
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