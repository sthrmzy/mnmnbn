function mostrarSecao(id) {
    // Oculta todas as seções
    var secoes = document.querySelectorAll('.secao');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // Mostra a seção clicada
    var secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}

