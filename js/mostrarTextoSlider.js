$(document).ready(function() {
    // Guarda el div que presionamos para mas adelante
    let idActivo=0;
    $(".desc").hide();
    // Muestra la descripción del libro
    $(".libro").on("click", function(e){
        let id=$(this).attr("id");
        // Al hacer click en un libro, se despliega la sinopsis, todos los libros se ponen en
        // una posición del eje Z mas bajo y el que tenemos seleccionado
        //  se pone mas arriba en el eje Z, todos los libros menos el seleccionados cambian la opacidad
        $("#"+id+">.desc").slideToggle("fast",function() {
            $("#"+id).toggleClass("toggleB").css('zIndex', '10');

        });
        $(".libro:not(#"+id+") .desc").slideUp("fast",function() {
            $(".libro:not(#"+id+") .desc").removeClass("toggleB");
            $(".libro:not(#"+id+")").css('zIndex', '5');
        });

    });
});