function insere_texto(elemento_id, texto_antes = '', texto_depois = '', ) {
    var elemento = document.getElementById(elemento_id) // Elemento DOM (no caso, um input de texto).
    var valor = elemento.value; // Valor no elemento (texto do input).
    var selecao_inicio = elemento.selectionStart; // Posição do início do texto selecionado.
    var selecao_fim = elemento.selectionEnd; // Posição do fim do texto selecionado.

    // Insere a string "texto_antes" antes da seleção e insere a string "texto_depois" depois da seleção.
    valor = valor.substring(0, selecao_inicio) + texto_antes + valor.substring(selecao_inicio, selecao_fim) + texto_depois +
        valor.substring(selecao_fim, valor.length);
    // Atualiza o valor de "elemento" com as strings inseridas.
    elemento.value = valor;

    // Calcula a nova posição do cursor no texto.
    var posicao = selecao_fim + texto_antes.length + texto_depois.length;
    // Define a posição do cursor.
    elemento.setSelectionRange(posicao, posicao);
    // Foca o "elemento" (torna-se um elemento ativo).
    elemento.focus();
}