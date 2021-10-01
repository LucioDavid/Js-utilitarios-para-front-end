// Função disparada pelo botão de ir para o topo da página, "botao-ir-para-o-topo".
function irParaOTopo() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    event.preventDefault()
}

var altura_minima;

// Sempre ao rolar a página, a função "scrollFunction" é chamada.
window.onscroll = function() {scrollFunction(altura_minima)};

/**
 * Função que dispara a animação de mostrar/esconder o botão de ir para o topo da página.
 * A animação é disparada somente se a página já tiver sido rolada uma altura mínima, "altura_minima".
 * "document.body.scrollTop" é a variável usada pelo navegador Safari.
 * "document.documentElement.scrollTop" é a variável usada pelos navegadores Firefox,
 * Chrome, Internet Explorer e o Opera.
 * 
 * ATENÇÃO!
 * O id da tag <a></a> do botão deve ser "botao-ir-para-o-topo".
 */
function scrollFunction(altura_minima) {
  if (document.body.scrollTop > altura_minima || document.documentElement.scrollTop > altura_minima) {
    $('#botao-ir-para-o-topo').removeClass('scale-out');
  } else {
    $('#botao-ir-para-o-topo').addClass('scale-out');
  }
}