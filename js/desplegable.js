$(document).ready(function() {
     // Esconde el menú secundario
    $("#navSec").hide();
    let desp=false;
     //Enseña o esconde el menu secundario y cambia el texto para identificar la funcion que hace
   $("#desp").click(function() {
        $("#navSec").slideToggle();
        if(desp) {
          $(".header-img").html("↓");
          desp=false;
        }else {
          $(".header-img").html("↑");
          desp=true;
        }
   });
  //  Para evitar problemas, siempre que el navegador cambie de resolucion, esconde el menú desplegable 
   $(document).resize(function() {
    $("#navSec").hide();
   });
});