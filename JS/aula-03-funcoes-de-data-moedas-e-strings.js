// Objeto Literal
const carro = {
    // Atributos
    marca: "Ford",
    modelo: "Focus",
    ano: 2014,

    // Métodos
    buzinar() {
        return "Beep! Beep!"
    }
}

// Imprimindo atributos e método do objeto carro
console.log(carro.marca, carro.modelo)
console.log(carro.buzinar())

// Classe
class Carro {
    // Atributos
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    // Método
    buzinar() {
        return "Beep! Beep!"
    }
}

// Criando instâncias da classe Carro
const carroPopular = new Carro("Fiat", "Uno", 2012)
const carroEsportivo = new Carro("Chevrolet", "Camaro", 2014)

// Imprimindo atributos e método dos carros
console.log(carroPopular.marca, carroPopular.modelo, carroPopular.ano)
console.log(carroPopular.buzinar())

console.log(carroEsportivo.marca, carroEsportivo.modelo, carroEsportivo.ano)
console.log(carroEsportivo.buzinar())

console.log()
console.log("-------------------------------------------------------------")
console.log()

// Manipulando Datas
const dataAtual = new Date()
const dia = dataAtual.getDate()
const mes = dataAtual.getMonth() + 1 // Mês é base 0, então somamos 1
const ano = dataAtual.getFullYear()

console.log(`Hoje é ${dia}/${mes}/${ano}.`)

console.log()
console.log("-------------------------------------------------------------");
console.log()

// Manipulando Moedas
let salario = 2500.30

console.log(salario.toFixed(2)); // Fixa o número de casas decimais
console.log(salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })) // Formata como moeda brasileira

console.log()
console.log("-------------------------------------------------------------")
console.log()

// Formatando Strings
const nome = "João Pedro Dias Barreto"
console.log(nome.toUpperCase()) // Converte para maiúsculas
console.log(nome.toLowerCase()) // Converte para minúsculas
console.log(nome.length) // Retorna o tamanho da string

// Usando Length para um Array
const lista = ['Maçã', 'Banana', 'Morango']
console.log(lista.length) // Retorna o número de elementos no array
