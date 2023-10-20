const modo = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const focoCurtoBt = document.querySelector('.app__card-button--curto');
const focoLongoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
});

focoCurtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});

focoLongoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

function alterarContexto(contexto){
    modo.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

}
