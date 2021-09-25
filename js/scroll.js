var lastScrollTop = 0;
var movimiento=50;
$(window).scroll(function(event){
    // Detecta si se está haciendo scroll hacia arriba o hacia abajo
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    //    Scroll hacia abajo
    movimiento+=5;
   } else {
    //    Scroll hacia arriba
        movimiento-=5;
   }
   lastScrollTop = st;
    // Cambia el ancho del contenedor para dar la sensacion de movimiento, el ancho varía dependiendo
    // de el tipo de scroll que se haya hecho
   $("#coche").animate({"width":movimiento+"px"},50,function() {
       $("#coche").css("justifyContent","flexEnd");
   });
});