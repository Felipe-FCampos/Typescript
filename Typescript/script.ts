const num1 = document.getElementById("#num1") as HTMLInputElement
const num2 = document.getElementById("#num2") as HTMLInputElement

function calcular(num1: number, num2: number){
    const soma = num1 + num2
    return soma
}

function onClick(){
    alert(calcular(+num1,+num2))
}