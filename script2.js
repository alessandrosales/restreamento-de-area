var mousePositionX = 0;
var mousePositionY = 0;

function restrearPosicao(event, element){
  var parentOffset = $(element).offset();
  mousePositionX = event.pageX - parentOffset.left;
  mousePositionY = event.pageY - parentOffset.top;
  $('.resultado').html($('<p>').html('Posição x: '+ mousePositionX));
  $('.resultado').append($('<p>').html('Posição y: '+ mousePositionY));
}

var totalDePosicoes = 9;
var contadorDePosicoes = 0;

function calcularTotalRastreado(){
  var result = ((contadorDePosicoes / totalDePosicoes) * 100).toFixed(2) + "%";
  $('.resultado_quantidade').html($('<p>').html('Total: '+result));
  return result;
}


var totalDePosicoesPorMovimento = 9;
var contadorDePosicoesPorMovimento = 0;
var posicoesPorMovimento = {p1: false,p2: false,p3: false,p4: false,p5: false,p6: false,p7: false,p8: false,p9: false};

function calcularTotalRastreadoPorMovimento(){
   
  if((mousePositionX >= 0 && mousePositionX <= 166) &&
      (mousePositionY >= 0 && mousePositionY <= 166)){
    if(posicoesPorMovimento.p1 == false) posicoesPorMovimento.p1 = true;
  }
   
  if((mousePositionX >= 166 && mousePositionX <= 332) &&
      (mousePositionY >= 0 && mousePositionY <= 166)){
    if(posicoesPorMovimento.p2 == false) posicoesPorMovimento.p2 = true;
  }
   
  if((mousePositionX >= 332 && mousePositionX <= 498) &&
      (mousePositionY >= 0 && mousePositionY <= 166)){
    if(posicoesPorMovimento.p3 == false) posicoesPorMovimento.p3 = true;
  }
   
  if((mousePositionX >= 0 && mousePositionX <= 166) &&
      (mousePositionY >= 167 && mousePositionY <= 332)){
    if(posicoesPorMovimento.p4 == false) posicoesPorMovimento.p4 = true;
  }
   
  if((mousePositionX >= 166 && mousePositionX <= 332) &&
      (mousePositionY >= 167 && mousePositionY <= 332)){
    if(posicoesPorMovimento.p5 == false) posicoesPorMovimento.p5 = true;
  }
   
  if((mousePositionX >= 332 && mousePositionX <= 498) &&
      (mousePositionY >= 167 && mousePositionY <= 332)){
    if(posicoesPorMovimento.p6 == false) posicoesPorMovimento.p6 = true;
  }
   
  if((mousePositionX >= 0 && mousePositionX <= 166) &&
      (mousePositionY >= 333 && mousePositionY <= 498)){
    if(posicoesPorMovimento.p7 == false) posicoesPorMovimento.p7 = true;
  }
   
  if((mousePositionX >= 166 && mousePositionX <= 332) &&
      (mousePositionY >= 333 && mousePositionY <= 498)){
    if(posicoesPorMovimento.p8 == false) posicoesPorMovimento.p8 = true;
  }
   
  if((mousePositionX >= 332 && mousePositionX <= 498) &&
      (mousePositionY >= 333 && mousePositionY <= 498)){
    if(posicoesPorMovimento.p9 == false) posicoesPorMovimento.p9 = true;
  }
  
  contadorDePosicoesPorMovimento = 0;
  
  for(p in posicoesPorMovimento){
    if(posicoesPorMovimento[p]) contadorDePosicoesPorMovimento++;
  }
  
  var result = ((contadorDePosicoesPorMovimento / totalDePosicoesPorMovimento) * 100).toFixed(2) + '%';
  $('.resultado_quantidade_movimento').html($('<p>').html('Total(movimento): '+result));
  return result;
  
}


$(document).ready(function(){
  
  $('.quadrado').mousemove(function(e){
    
    restrearPosicao(e, this);
    console.log(calcularTotalRastreadoPorMovimento());
    
  });
  
  $('.posicoes li').hover(function(){
    
    if(!$(this).hasClass('rastreado')){
      $(this).css('background', 'black');
      $(this).addClass('rastreado');
      contadorDePosicoes++;
    }
    
    calcularTotalRastreado();
    
  });
  
})