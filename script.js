const corVermelho = document.getElementById('vermelho');
const corLaranja = document.getElementById('laranja');
const corAmarelo = document.getElementById('amarelo');
const corVerde = document.getElementById('verde');
const corRoxo = document.getElementById('roxo');
const corCinza = document.getElementById('cinza');
const corVioleta = document.getElementById('violeta');
const corArcoiris = document.getElementById('arcoiris');


corVermelho.addEventListener('click', function (){
    document.body.style.background = '#FF0000';
});

corLaranja.addEventListener('click', function (){
    document.body.style.background = '#FF4500';
});

corAmarelo.addEventListener('click', function (){
    document.body.style.background = '#FFD700';
});

corVerde.addEventListener('click', function (){
    document.body.style.background = '#006400';
});

corRoxo.addEventListener('click', function (){
    document.body.style.background = '#9400D3';
});

corCinza.addEventListener('click', function (){
    document.body.style.background = '#696969';
});

corVioleta.addEventListener('click', function (){
    document.body.style.background = '#7B007A';
});



