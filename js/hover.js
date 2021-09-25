window.onload=()=> {
    // Al pasar por encima de un libro, se le añade una clase para cambiar el cursor
    $(".libro").mouseenter(function() {
        $(".libro").addClass("libroH");
    });
    // Al salir del libro, se le quita la clase añadida anteriormente 
    $(".libro").mouseleave(function() {
        $(".libro").removeClass("libroH");
    });
}