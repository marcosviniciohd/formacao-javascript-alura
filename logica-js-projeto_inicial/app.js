// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// let chute;
// console.log(numeroSecreto);

// while (chute != numeroSecreto) {
//     chute = parseInt(prompt('Digite um número entre 0 e 10'));
//     if( chute === numeroSecreto) {
//         alert(`Você descobriu o número secreto  ${numeroSecreto}`);
//     } else if (chute > numeroSecreto) {
//         alert('O número secreto é menor');
//     } else if (chute < numeroSecreto) {
//         alert('O número secreto é maior');
//     }
// }


console.clear();
alert(`Boas vindas ao jogo do número secreto`);
let numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
let chute;

while (chute != numeroSecreto) {
    chute = parseInt(prompt(`Digite o número secreto`));
    if (chute == numeroSecreto) alert(`Você acertou o número secreto, parabéns! O número secreto é ${numeroSecreto}`);
    else if (chute > numeroSecreto) alert(`O número secreto é menor`);
    else if (chute < numeroSecreto) alert(`O número secreto é maior`);
}