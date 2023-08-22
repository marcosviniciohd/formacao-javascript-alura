alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 30');
console.log(numeroSecreto);

if( chute == numeroSecreto) {
    console.log('Você descobriu o número secreto' + numeroSecreto);
} else {
    console.log('Você errou!');
}


