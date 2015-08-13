var totalDePosicoes = 9;
var contadorDePosicoes = 0;

function calcularTotalRastreado(){
  return totalRastreado = (contadorDePosicoes / totalDePosicoes) * 100 + "%"
}

$(document).ready(function(){
  
  $('.posicoes li').hover(function(){
    
    if(!$(this).hasClass('rastreado')){
      $(this).css('background', 'black');
      $(this).addClass('rastreado');
      contadorDePosicoes++;
    }
    
    console.log(calcularTotalRastreado());
    
  });
  
})