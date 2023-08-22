numero = prompt('Digite um número: ');
while (numero === '' || isNaN(numero) || numero === null){
    alert('Digite um número válido!');
    numero = prompt('Digite um número: ');

}
numero = Number(numero);
if (numero < 0){
    alert('Número negativo');
} else {
    alert('Número positivo');
}

