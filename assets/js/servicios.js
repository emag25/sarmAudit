function showDescripcion(titulo) {

    let i;
    let index = -1;
    let descripcion = document.getElementsByClassName("descripcion");
    let servicios = document.getElementsByClassName("servicio");

    for (i = 0; i < descripcion.length; i++) {
        descripcion[i].style.display = "none";        
        if(titulo === descripcion[i].id){
            index=i;
        }
    }

    for (i = 0; i < servicios.length; i++) {
        servicios[i].className = servicios[i].className.replace(" now", "");
    }

    if(index != -1){
        descripcion[index].style.display = "block";
        servicios[index].className += " now";
    }
}