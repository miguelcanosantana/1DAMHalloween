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

function cat_scare_change_text(){
  ocultar('cat_scare');
  mostrar ('finddisc');

}

function cambiofondo(){
  mostrar('lights_on');
  mostrar('tocadisco');
  setTimeout("mostrar('cat_scare')", 1000);
  setTimeout("cat_scare_change_text()",6000);
  setTimeout("mostrar('hoverdisco')", 6000);



}

function retardocat(){
         mostrar('cat');sonar('meowo');
         setTimeout("ocultar('cat')",1000);
     }

function hover_disc_event(){
  setTimeout("mostrar('disco')", 1000);

}

