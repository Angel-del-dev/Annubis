$(document).ready(function() {
    let contador=1;
    let contador2=3;
    $("#novedades .foto .libro:not(#"+contador+")").hide();
    $("#trending .foto .libro:not(#"+contador2+")").hide();
    // Al clicar en cualquier flecha para pasar el slider, se esconden todas las descripciones de todos los libros
    $("#ant").click(function() {
        $("#"+contador).fadeToggle(function() {
            contador=(contador>1)?contador-1:2;
            $("#"+contador).finish().fadeToggle();
        });
    });
    $("#post").click(function() {
        $("#"+contador).fadeToggle(function() {
            contador=(contador<2)?contador+1:1;
            $("#"+contador).finish().fadeToggle();
        });
        
    });

    $("#ant2").click(function() {
        $("#"+contador2).fadeToggle(function() {
            contador2=(contador2>3)?contador2-1:4;
            $("#"+contador2).fadeToggle();
        });
    });
    $("#post2").click(function() {
        $("#"+contador2).fadeToggle(function() {
            contador2=(contador2<4)?contador2+1:3;
            $("#"+contador2).fadeToggle();
        });
        
    });
    
});