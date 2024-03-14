
function Maioridade(i){
    if(i <= 18 == 0){
        return "Maior de idade"
    } else{
        return "Menor de idade"
    }
}

let idade = 20

console.log(`O aluno é ${Maioridade(idade)}`)