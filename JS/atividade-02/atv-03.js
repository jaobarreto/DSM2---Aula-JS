const filmes = [
    {
        titulo: "Interestelar",
        genero: "Ficção Científica",
        ano: 2014,
        classificacao: "12 anos"
    },
    {
        titulo: "O Poderoso Chefão",
        genero: "Drama",
        ano: 1972,
        classificacao: "16 anos"
    },
    {
        titulo: "Oppenheimer",
        genero: "Suspense",
        ano: 2023,
        classificacao: "16 anos"
    }
];

filmes.forEach(filme => {
    console.log("Título: " + filme.titulo);
    console.log("Gênero: " + filme.genero);
    console.log("Ano: " + filme.ano);
    console.log("Classificação: " + filme.classificacao);
    console.log("-----------------------------------------");
});
