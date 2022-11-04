let miembroIndex = 1;

function plusMiembros(n) { 
    showMiembros(miembroIndex += n);
}

function showMiembros(n) {
    
    let i;
    let miembros = document.getElementsByClassName("miembro");
    let dots = document.getElementsByClassName("dot");
    
    if (n > miembros.length) {
        miembroIndex = 1
    }
    
    if(n < 1) {
        miembroIndex = miembros.length
    }

    for (i = 0; i < miembros.length; i++) {
        miembros[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    miembros[miembroIndex-1].style.display = "block";
    dots[miembroIndex-1].className += " active";
}