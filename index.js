// //1

let segundos = Number (prompt("Digite um valor em segundos:"))

const horas = Math.floor(segundos / 3600)
//arredondando a hora

segundos = segundos % 3600

const minutos = Math.floor(segundos / 60)
//arredondando minutos

segundos = segundos % 60

console.log(`${horas}:${minutos}:${segundos}`);

//2

//pra contar de 1 a 100
let numero = 1
//numero começa em 1

while(numero <= 100) {
    console.log(numero);
    numero = numero + 1

}
