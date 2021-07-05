// Dica: Quebre em pequenas partes, procure códigos semelhantes e teste.

// 1 - Distância entre o scroll e o topo
$(window).scroll(function(){
    // pega a distancia do topo quando da scroll
    var windowTop = $(this).scrollTop();
    // 2 - Ditância entre o elemento e o topo
    // o each pega cada anime e executa nele
    $('.anime').each(function(){
        // verifica se a distancia do topo é maior que a do elemento
        if(windowTop > $(this).offset().top - 400){
            //adiciona a classe que vai ter a animação
            $(this).addClass('anime-init');
        } else{
            //retira a classe da animação
            $(this).removeClass('anime-init');
        }
    });


});
// 3 - Verificar essas duas variáveis sempre que o scroll for ativado
// 4 - Se distância entre o elemento e o topo for maior que do scroll, adicionar classe
// 5 - A classe deve mostrar e animar o elemento

