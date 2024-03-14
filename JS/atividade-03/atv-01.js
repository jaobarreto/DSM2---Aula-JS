
function datasFuturas(){

    let dataAtual = new Date()
    let dia = dataAtual.getDate() + 7
    let mes = dataAtual.getMonth() + 5
    let ano = dataAtual.getFullYear() + 1

    console.log(`Estamos no futuro e a data de hoje é: ${dia}/${mes}/${ano}`)
}
datasFuturas()