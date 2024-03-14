//declaração de variável
// cons x let x var

 const name = "João"

nome = "Barreto"

console.log(nome)

let idade = 19

console.log(idade)

let altura = 1.89

console.log(altura)

//typeof mostra o tipo da variavel

console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

console.log(`O sobrenome do aluno é ${nome}.`)



//funcoes no js




function minhaFuncao(){
    
}

console.log(typeof(minhaFuncao))

//tipos de funçoes
//função simples

function saudacao(){
    console.log("Olá, bem vindo!")
}
saudacao()

//funçao com parâmetro / argumento

function Saudacao(nome){
    console.log(`Olá, Bem-vindo ${nome}!`)
}
Saudacao("João Barreto")

//função com mais de um parâmetro

function soma(n1, n2){
    let res = n1 + n2
    console.log(`A soma dos dois números foi de ${res}.`)
}
soma(5, 5)

//função com retorno

function Soma(n1, n2){
    return n1 + n2      //substitui a criação de variavel, vai retornar para a função
}
console.log(`A soma dos dois números foi ${Soma(2, 6)}.`)

//função com mais de um retorno
function parimpar(n){
    if(n % 2 == 0){
        return "Par"
    } else{
        return "Ímpar"
    }
}

let num = 5

console.log(`O número enviado é ${parimpar(num)}`)

//função anônima

let dobro = function (x) {
    return x * 2
}

console.log(dobro(123))

//arrow function (com um parâmetro)

const calc = function(num1, operador, num2){
    return eval (` ${num1} ${operador} ${num2} `)   //a função eval ela lê uma string, ela avalia.

}
console.log(`O resultado da operação é ${calc(5, '*', 5)}`)

//arrow function =>

const Calc = (num1, operador, num2) => {
    return eval (` ${num1} ${operador} ${num2} `)
}
console.log(`O resultado da operação é ${calc(9, '*', 3)}`)


//arrow function com parametro unico

const triplo = (x) => {
    return x*3
}
console.log(triplo(10))