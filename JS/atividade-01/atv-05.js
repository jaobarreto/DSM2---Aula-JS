
let media = function (nota1, nota2) {

   if (((nota1 + nota2)/2) >= 5){
    return "Aprovado!"
   }
   else{
    return "Reprovado!"
   }
   
}

console.log(`O Aluno foi: ${media(2, 8)}`)