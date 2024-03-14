const eu = {
    nome: "João",
    idade: 19,
    cidade: "Cananéia",
    hobby: "Jogar Basquete",
    musicaPreferida: "No Surprises - Radiohead"
};

for (let chave in eu) {
    console.log(`${chave}: ${eu[chave]}`);
}