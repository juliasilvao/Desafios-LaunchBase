//Cálculo de aposentadoria
const nome = 'Marcos'
const sexo = 'M'
const idade = 55
const contribuicao = 45

const calculoContribuicao = idade + contribuicao

/*
- O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa 
ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
*/

if(sexo == 'F' && contribuicao >= 30 || sexo == 'M' && contribuicao >= 35 ) {
    if (sexo == 'F' && calculoContribuicao >= 85 || sexo == 'M' && calculoContribuicao >= 95 ){
        console.log(`${nome}, você pode se aposentar!`)
    } else{
        console.log(`${nome}, você NÃO pode se aposentar!`)
    }
} else{
    console.log(`${nome}, você NÃO pode se aposentar!`)
}

