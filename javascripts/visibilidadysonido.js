// Funciones para mostrar/ocultar/sonar usables en cualquier lugar
function mostrar(element){
  document.getElementById(element).style.visibility="visible";
}

function ocultar(element){
  document.getElementById(element).style.visibility="hidden";
}

function sonar(musica){
  document.getElementById(musica).play();
}
function parar(musica){
  document.getElementById(musica).pause();
}

function cambiofondo(){
  mostrar('lights_on');

}

function retardocat(){
         mostrar('cat');sonar('meowo');
         setTimeout("ocultar('cat')",1000);
     }

