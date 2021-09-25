window.onload=()=> {
    // Una array para generar el menu
    let array=["Terror","Comedia","Romántica","Suspense","Policíaca"];
    let mostrado=false;
    let genero="";
    let togg=false;
    $("h1").css("cursor","pointer");
    // Al hacer doble click sobre el h1, genera una lista de generos, si se vuelve a hacer doble click desaparece
    $("h1").dblclick(function() {
        if(mostrado===false) {
            $.each(array,function(i,item) {
                let li=$("<li title='Click para seleccionar un filtro, solo puede deshacerse si haces click en un libro o seleccionando otro género'>").addClass(item).text(item);
                $("#ul").append(li);
            });
            mostrado=true;
            // Al hacer click sobre una de las opciones de la lista, todos los libros que no tengan ese
            // genero obtienen un tono grisaceo(fadeto) 
            $("li").click(function() {
                let li=$(this);
                $("#ul li").removeClass("activeNav");
                genero=li.attr("class");
                $(".libro:not(."+genero+")").fadeTo( 200, 0.4);
                $("."+genero).fadeTo( 200, 1);
                li.addClass("activeNav");
                $(".libro .desc").slideUp();
            });
            // Antes de la lista se genera una imagen
            $("ul").prepend("<li><img id='img' src='img/book.png' title='Nada por aqui, solo un búo' /></li>");
        }else {
            $("#ul li").remove();
            mostrado=false;
        }
    });
}