document.getElementById("menu-btn-salir").onclick = function() { 
    if( confirm("¿Desea abandonar la aplicación?") == true){  //Probar con sweetalert
        alert("Salir");
    } else {
        alert("Se mantiene en la app");
    }
 }

