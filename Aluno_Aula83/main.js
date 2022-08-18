var ultimaPosicaoX=0, ultimaPosicaoY=0;
var cor= "black";
var larguraLinha = 10;

//Variáveis para substituição
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var width = screen.width;
 var newwidth = screen.width-70;
var newheigth = screen.height-300;





/* NOTA: 

5 tamanhos mais comuns de tela:
. width da tela em 1200px ou maior: telas grandes (laptops e desktops)
. width de tela entre 1200px e 992px: Para laptops.
. width de tela entre 992px e 768px: Para tablets.
. width de tela menor que 768px: Para mobiles.

Nosso foco será desenvolver o app para tablets e mobiles, então.......

*/

if (width<992){
    
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").heigth=newheigth;
document.body.style.overflow="hidden";
}

    
//EVENTOS E FUNÇÕES


//Evento principal
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart() {
    
    ultimaPosicaoX = e.touches[0].clientX-canvas.offsetLeft;
    ultimaPosicaoY = e.touches[0].clientY-canvas.offsetTop;
    
}

canvas.addEventListener("touchmove",mytouchmove);
 function mytouchmove() {
    currentPositionOfTouchX=e.touches[0].clientX-canvas.offsetLeft;
    currentPositionOfTouchY=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath(); //Gatilho para iniciar o desenho
    ctx.strokeStyle = cor;
    ctx.lineWidth = larguraLinha;
    ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY); 
    ctx.stroke();
    ultimaPosicaoX = currentPositionOfTouchX;
    ultimaPosicaoy = currentPositionOfTouchY;
 }

//Atividade adicional







// CÓDIGO RESERVA
/*

//INÍCIO - mesmo código utilizado para a versão web
ctx.beginPath(); //Gatilho para iniciar o desenho
ctx.strokeStyle = cor;
ctx.lineWidth = larguraLinha;

//moveTo = apenas mover (sem riscar)
ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY); 
//lineTo = mover riscando
ctx.lineTo(posicaoAtualX, posicaoAtualY);

console.log("Posição atual de X e Y: ");
console.log("x = " + posicaoAtualX + "| y = " + posicaoAtualY);

ctx.stroke(); //Fazer acontecer o desenho

//Atualizando as coordenadas
ultimaPosicaoX = posicaoAtualX; 
ultimaPosicaoY = posicaoAtualY;

//FIM - mesmo código utilizado para a versão web

*/