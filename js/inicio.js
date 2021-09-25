$(document).ready(function() {
    //Oculta todos los elementos del body excepto #inicio, que queremos que se visualice
    $("#nav").hide();
    $("#contenido").hide();
    $("#inicio").show();
    $("footer").hide();
    
    //Al hacer click en #mostra, todo se muestra excepto #inicio
    $("#mostra").on("click",function() {
        $("#inicio").slideUp(function() {
            $("#nav").slideDown();
            $("#contenido").slideDown();
            $("footer").slideDown();
        });
    });
});