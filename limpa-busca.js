function limpa_busca(form_id, busca_id) {
    var form = document.getElementById(form_id);
    var busca = document.getElementById(busca_id);

    busca.setAttribute('value', '');
    form.submit();
}