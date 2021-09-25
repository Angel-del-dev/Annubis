$(document).ready(function() {
    // Esconde el contenedor de carga
    $("#caja").hide();
    // Al hacer focus en cualquier input menos los de tipus submit cambia el color del borde a amarillo
    // Coje todos los input y detecta cual ha hecho focus
    $("input").focus(function(e) {
        let id=e.target.id;
        $("input:not(input[type=submit])").css('border-color','#000');
        $("#"+id).css('border-color','yellow');
    });
    // Al hacer focusout el tipo de letra cambia
    $("input:not(input[type=submit])").focusout(function(e) {
        let id=e.target.id;
        $("#"+id).css("font-family", "Montserrat");
    });
    // Al terminar de escribir una tecla en un input, se cambia el color de letra a verde
    $("input").keyup(function(e) {
        let id=e.target.id;
        $("#"+id).css("color","green");
    });
    // Al empezar a escribir una tecla o mantener una tecla pulsada, cambia el color del texto del input a rojo
    $("input").keydown(function(e) {
        let id=e.target.id;
        $("#"+id).css("color","#C00");
    });
    // Al presionar una tecla en el textarea cambia el tipo de letra
    $("#text").keypress(function() {
        $("#text").css("font-family", "DotGothic16");
    });
    // Se genera un h1 antes del div que contiene el formulario
    $("#divForm").before("<h1 title='Generado con before'>Contacta conmigo<span><nav><ul id='ul'></ul></nav></span></h1>");
    // Al hacer click en el textarea, se genera un h2 despues del div del formulario
    $("textarea").one("click", function() {
        $("#divForm").after("<h2 title='Generado con after()'>Todas las sugeréncias o comentarios son agradecidos</h2>");
    });
    // Al cambiar la resolución del navegador, salta una alerta, si se acepta se desactiva la alerta 
    $(window).resize(function() {
        let respuesta=confirm("Se está cambiando la resolución del navegador, ¿Deseas quitar esta alerta?");
        if(respuesta) {
            $(window).off("resize");
        }
    });
    // Evita que el formulario se envie
    $("form").submit(function(e) {
        e.preventDefault();
    });
    // Genera un numero aleatorio en un rango
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    
    let hecho=false;
    // Al hacer focusin, el botón cambia su medida de ancho
    $("button").focusin(function() {
        $("button").animate({width:"14vw"},function() {
            // Control de errores para que no se pueda enviar mas de una vez
            if(!hecho) {
                hecho=true;
                // Muestra el div que contiene la carga
                $("#caja").show();
                let contador=0;
                // Se le añade una clase con una animacion para que gire
                $("#elemento").addClass("rotarCambio");
                let rnd=random(0,5);
                // Se crea un intervalo con un tiempo aleatorio que simula insercion a una base de datos
                let inte=setInterval(function() {
                    if(contador===rnd) {
                        clearInterval(inte);
                        // Al terminar el intervalo, se esconde el contenedor del tiempo de carga y se sustituye por una imagen
                        $("#elemento").hide(function() {
                            let img=$("<img>").addClass("conf").attr("src","img/conf.png");
                            $("#caja").append(img);
                            $("button").html("Tu petición se ha enviado correctamente").prop("disable","true").css({backgroundColor:"#8c8c8c",color:"#FAFAFF",fontWeight:"bolder",textTransform:"uppercase"});
                        });
                    }
                    let cuenta=rnd-contador;
                    // Cambia el texto del botón acorde al tiempo que quede
                    $("button").html("Tiempo estimado "+cuenta+"s");
                    contador++;
                },1000);
            }
        });
    });

});