
function conversaoMoeda(){
    salarioReal = 3458.65

    salarioDolar = salarioReal * 0.20

    salarioEuro = salarioReal * 0.19

    console.log(salarioReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })); // Real Brasileiro
    console.log(salarioDolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })); // Dólar Americano
    console.log(salarioEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })); // Euro
}
conversaoMoeda()