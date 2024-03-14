
function nomeFormatado() {
    const nome = "João Pedro Dias Barreto";
    return {
        nome,
        nomeMaisculo: nome.toUpperCase(),
        nomeMinusculo: nome.toLowerCase(),
        ler: nome.length
    };
}

const infoNome = nomeFormatado(); //Aqui eu chamo a função e armazeno o objeto retornado em uma variável

console.log("Nome: " + infoNome.nome);
console.log("Nome em maiúsculo: " + infoNome.nomeMaisculo);
console.log("Nome em minúsculo: " + infoNome.nomeMinusculo);
console.log("Tamanho do nome: " + infoNome.ler);
