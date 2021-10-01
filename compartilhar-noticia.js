function compartilhar_facebook(url) {
    var largura = window.screen.width / 2;
    var altura = window.screen.height / 2;
    posicao_horizontal = (window.screen.width - largura) / 2;
    posicao_vertical = (window.screen.height - altura) / 2;
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=` + largura + `,height=auto,left=` + posicao_horizontal + `,top=` + posicao_vertical;

    open('http://www.facebook.com/sharer.php?u=' + url, 'test', params);
}

function copia_link(link) {
    // Cria um elemento input de texto somente para copiar o link.
    var var_auxiliar = document.createElement('input');
    document.body.appendChild(var_auxiliar);
    var_auxiliar.value = link;
    var_auxiliar.select();
    document.execCommand('copy');
    document.body.removeChild(var_auxiliar);

    // Atualiza a mensagem do balãozinho (tooltip) acima do botão.
    var botao = document.getElementById("link-compartilhar");
    botao.setAttribute('data-tooltip', 'Copiado para a área de transferência')

    // Reabre o balãozinho, para mostrar a mensagem atualizada.
    var instance = M.Tooltip.getInstance(botao);
    instance.close();
    instance.open();
}

function link_copiado() {
    // Atualiza a mensagem do balãozinho (tooltip) acima do botão.
    var botao = document.getElementById("link-compartilhar");
    botao.setAttribute('data-tooltip', 'Copiar link da notícia');
}