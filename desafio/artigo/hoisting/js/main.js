const desafio = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');
desafio.addEventListener('click', (evento) => {
    console.log('Passei aqui');
    alert('Sou uma função anômina, sou chamado sempre que identifico o clique no botão');
    resultado.innerHTML = 'Fui clicado';
});