$(document).ready(function() {
    // Guarda el div que presionamos para mas adelante
    let idActivo=0;
    let togg=false;
    $(".desc").hide();
    // Muestra la descripción del libro
    $(".libro").on("click", function(e){
        let id=$(this).attr("id");
        if(togg && idActivo===id) {
            togg=false;
        }else {
            togg=true;
        }
        idActivo=id;
        // Al hacer click en un libro, se despliega la sinopsis, todos los libros se ponen en
        // una posición del eje Z mas bajo y el que tenemos seleccionado
        //  se pone mas arriba en el eje Z, todos los libros menos el seleccionados cambian la opacidad
        $("#"+id+">.desc").slideToggle("fast",function() {
            $("#"+id).toggleClass("toggleB").css('zIndex', '10');
            $("#ul li").removeClass("activeNav");

        });
        $(".libro:not(#"+id+") .desc").slideUp("fast",function() {
            $(".libro:not(#"+id+") .desc").removeClass("toggleB");
            $(".libro:not(#"+id+")").css('zIndex', '5');
        });
        if(togg) {
            $(".libro:not(#"+id+")").fadeTo( 200, 0.4);
            $("#"+id).fadeTo( 200, 1);
        }else {
            $(".libro:not(#"+id+")").fadeTo( 200, 1);
            $("#"+id).fadeTo( 200, 1);
        }
    });
});