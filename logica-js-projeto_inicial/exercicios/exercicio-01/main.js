diaSemana = prompt("Digite o dia da semana: ");
console.log(typeof diaSemana);
if(diaSemana === 'Sábado' || diaSemana === 'Domingo'){
    document.getElementById('diaSemana').innerHTML = "Bom final de semana!";
} else {
    document.getElementById('diaSemana').innerHTML = "Boa semana!";
}