let xBOLINHA = 300;
let yBOLINHA = 200;
let dBOLINHA = 15;
let raio = dBOLINHA / 2 ;

//velocidadedabolinha
let velocidadeXBOLINHA = 6;
let velocidadeYBOLINHA = 6;

//variaveis da raquete
let xRAQUETE = 5;
let yRAQUETE = 150;
let RAQUETECOMPRIMENTO = 10;
let RAQUETEALTURA = 90;

//variaveis do  oponente
let xRAQUETEOPONENTE = 585;
let yRAQUETEOPONENTE = 150;
let velocidadeyOPONENTE;

let colidiu = false;

//placar do jogo
let meuspontos = 0;
let pontosdooponente = 0;
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
//sons do jogo
let raquetada;
let ponto;
let trilha;
  
  function preload(){
    trilha = loadSound("trilha.mp3")
    ponto = loadSound("ponto.mp3")
    raquetada = loadSound("raquetada.mp3")
  }


function draw() {
  background(0);
mostrabolinha();
movimentabolinha();
verificacolisaobordas();
rect(xRAQUETE, yRAQUETE, RAQUETECOMPRIMENTO , RAQUETEALTURA);
mostraraquete (xRAQUETE, yRAQUETE);
movimentaminharaquete();
//verificacolisaocomaraquete();
verificaCOLISAORAQUETE(xRAQUETE, yRAQUETE);
mostraraquete(xRAQUETEOPONENTE, yRAQUETEOPONENTE);
movintaraqueteoponente();
verificaCOLISAORAQUETE(xRAQUETEOPONENTE, yRAQUETEOPONENTE);
incluiplacar();
marcaponto();  
}


function mostrabolinha(){circle(xBOLINHA, yBOLINHA, dBOLINHA)
  
}

function movimentabolinha() {xBOLINHA += velocidadeXBOLINHA;
yBOLINHA += velocidadeYBOLINHA;
  
}

function verificacolisaobordas(){
   if (xBOLINHA + raio> width ||
    xBOLINHA -raio < 0){velocidadeXBOLINHA*= -1
   
 }
  if(yBOLINHA + raio > height ||
    yBOLINHA < 0){
    velocidadeYBOLINHA *= -1
  }
}

function mostraraquete(x,y){
  rect(x, y, RAQUETECOMPRIMENTO , RAQUETEALTURA)
}


function movimentaminharaquete(){
 if (keyIsDown(UP_ARROW)){
   yRAQUETE -= 10;
 }
   if (keyIsDown(DOWN_ARROW)){
   yRAQUETE += 10;
 }
}
 
function verificacolisaocomaraquete(){
 if (xBOLINHA - raio < xRAQUETE + RAQUETECOMPRIMENTO && yBOLINHA - raio <yRAQUETE + RAQUETEALTURA && yBOLINHA + raio > yRAQUETE ){
 velocidadeXBOLINHA *= -1;  
   raquetada.play();
 } 
}
function verificaCOLISAORAQUETE(x, y){
  colidiu = 
collideRectCircle(x, y, RAQUETECOMPRIMENTO, RAQUETEALTURA, xBOLINHA, yBOLINHA, raio);
  if (colidiu){velocidadeXBOLINHA *= -1;
              raquetada.play();}
}

function movintaraqueteoponente(){
  if(keyIsDown(87)){
   yRAQUETEOPONENTE -= 10;
 }
   if(keyIsDown(83)){
   yRAQUETEOPONENTE += 10;
   }
}  

function incluiplacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140, 0));
  rect(150, 10, 40, 20);
    fill(255);
  text(meuspontos, 170, 26);
    fill(color(255,140, 0));
  rect(450,10, 40, 20);
    fill(255);
 text(pontosdooponente, 470, 26)
}
function marcaponto(){
  if(xBOLINHA > 590){
    meuspontos += 1;
    ponto.play();
  }
  if(xBOLINHA < 10){
    pontosdooponente += 1;
    ponto.play();
  }
}