function mostrarSecao(id) {
    // Oculta todas as seções
    var secoes = document.querySelectorAll('.secao');
    secoes.forEach(function (secao) {
        secao.classList.remove('mostrar');
        setTimeout(function () {
            secao.style.display = 'none';
        }, 500); // Aguarda o término da transição (500ms)
    });

    // Mostra a seção clicada
    var secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.style.opacity = '0';
        secaoSelecionada.style.display = 'block';

        // Ativa a animação de desvanecimento
        setTimeout(function () {
            secaoSelecionada.style.opacity = '1';
            secaoSelecionada.classList.add('mostrar');
        }, 50); // Adiciona a classe após um pequeno intervalo para garantir que a transição ocorra
    }
}
