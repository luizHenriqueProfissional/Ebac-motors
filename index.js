$('#carrousell-imagens').slick({
    autoplay:true,
});
$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})
$('#Telefone').mask('(00)00000-0000')
$('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent('li').find('h3').text();
    $('#VeiculoDeInteresse').val(nomeVeiculo);
    $('html').animate ({
        scrollTop:destino.offset().top
    },1000)
})
$('nav #contatos').click(function(){
    const destinoSobre = $('#contato');
    $('html').animate({
        scrollTop:destinoSobre.offset().top
    },2000)
})
