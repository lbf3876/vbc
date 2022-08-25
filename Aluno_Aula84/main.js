//Variáveis de substituição
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");


//Definir altura e largura do Rover.
var roverWidth = 100;
var roverHeight = 90;


//Definir posição do Rover.
roverX = 10;
roverY = 10;



//FUNÇÕES


//definir o que nossa função vai fazer
function add() {
	backgroundImg = new Image(); //Código para carregar a imagem no navegador antes de ir para o canvas
	backgroundImg.onload=uploadBackground;
	backgroundImg.src = "mars.jpg"
	roverImg = new Image(); //Código para carregar a imagem no navegador antes de ir para o canvas
	roverImg.onload=uploadrover;
	roverImg.src = "rover.png";

}

function uploadBackground() {
	ctx.drawImage(backgroundImg, 0,0,canvas.width,canvas.height)
}
function uploadrover() {
	ctx.drawImage(roverImg, roverX,roverY,roverWidth,roverHeight)
}
window.addEventListener("keydown",mykeydown);
//Funções para exibir a imagem no canvas
//Sintaxe: ctx.drawImage(img,x,y,width,height);
function mykeydown (e){
	teclaApertada = e.keyCode;
	if (teclaApertada == "38") {
		 up();
	}
	if (teclaApertada == "40") {
		down();
   }
   if (teclaApertada == "37") {
	left();
}
if (teclaApertada == "39") {
	right();
}
}
function up() {
	if (roverY >= 0 ){
roverY = roverY - 10 ;
uploadrover ();
uploadBackground();

}

}
function down() {
	if (roverY <= 790 ){
		roverY = roverY + 10 ;
		uploadrover ();
		uploadBackground();
}
}
function right() {
	if (roverX <= 590 ){
		roverX = roverX + 10 ;
		uploadrover ();
		uploadBackground();
}
}
function left() {
	if (roverX >= 0 ){
		roverX = roverX - 10 ;
		uploadrover ();
		uploadBackground();
}
}
//Evento para obter o valor da tecla pressionada



//Função principal




// PARTE 2 - AULA 85

//Funções das teclas direcionais


	