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

var repeat_count = 0; /*Variable for bug repeat*/

function repeat_it(){
  setTimeout("bugs()", 100);
}





function bugs(){
  if (repeat_count < 16) {
    ocultar('lights_on');
    setTimeout("mostrar('disco')", 500);
    setTimeout("mostrar('lights_on')", 700);
    setTimeout("mostrar('lights_on')", 700);
    setTimeout("ocultar('disco')", 1000);
    setTimeout("mostrar('disco')", 1100);
    setTimeout("ocultar('disco')", 1200);
    repeat_count = repeat_count + 1;
    setTimeout("repeat_it()", 100);
  } else {
    parar('susto');
    mostrar('dark');
  }
}

function hover_disc_event(){
  ocultar ('finddisc');
  ocultar ('hoverdisco');
  mostrar('putdisc');
  setTimeout("mostrar('disco')", 4000);
  setTimeout("sonar('music')", 4000);
  setTimeout("ocultar('putdisc')", 10000);
  setTimeout("mostrar('listens')", 14000);
  setTimeout("ocultar('listens')", 34000);
  setTimeout("sonar('susto')", 59000);
  setTimeout("parar('music')", 60000);
  setTimeout("ocultar('tocadisco')", 60000);
  setTimeout("mostrar('cerrado')", 60000);
  setTimeout("ocultar('disco')", 60000);
  setTimeout("bugs()", 62500);
}

