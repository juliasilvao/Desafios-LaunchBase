// Cálculo de IMC

const nome = 'Julia'
const peso = 55
const altura = 1.54
const sexo = 'F'

const imc = peso / (altura * altura);

if( imc >= 30){
    console.log(`${nome} seu IMC é ${imc}, você está acima do peso.`)
} else{
    console.log(`${nome} seu IMC é ${imc}, você não está acima do peso.`)
}