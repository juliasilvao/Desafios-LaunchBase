const programadora = {
    nome: 'Julia',
    idade: 23,
    tecnologias: [
        {
            nome: 'JavaScript', especialidade: 'WEB/Mobile'
        },
        {
            nome: 'C#', especialidade: 'WEB'
        },
        {
            nome: "C++", especialidade: "Desktop"
        }
    ]
}

console.log(`A usuária ${programadora.nome} tem ${programadora.idade} anos e usa a tecnologia ${programadora.tecnologias[0].nome} com especialidade em ${programadora.tecnologias[0].especialidade}`)