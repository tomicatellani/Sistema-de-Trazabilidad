document.getElementById("botonera-lotes").onload = function () {

    //Cambia el tamaño de la botonera
    tamañoBotonera("botonera-lotes");
    //Cambia el nombre del título
    changeName("botonera-lotes", "Lotes");

    //Estas dos líneas guardan en 'b' el contenido de la botonera
    let a = document.getElementById("botonera-lotes");
    let b = a.contentDocument ? a.contentDocument : a.contentWindow.document;
    //Desde 'b' se obtienen todos los elementos con la clase ".btn-botonera"
    b.querySelectorAll(".btn-botonera").forEach(item => {
        //A cada botón se le asigna un listener para que desate un evento cuando se le hace clic
        item.addEventListener('click', event => {
            //Se llama a la función botonPresionado y se envía como parámetro la id del botón presionado
            botonPresionado(item.id);
        })
    })
}

//Actúa en función del botón que se presione 
function botonPresionado(boton) {
    switch (boton) {
        //En caso de que la id del boton presionado sea "cargar"... 
        case "cargar":
            cargar();
            break;
        //En caso de que la id del botón presionado sea "modificar"...    
        case "modificar":
            modificar();
            break;
        //En caso de que la id del botón presionado sea "visaulizar"...
        case "visualizar":
            visualizar();
            break;
        //En caso de que la id del botón presionado sea "atras"...
            case "atras":
            atras();
            break;
        //En caso de que el parámetro no coincida con ninguno de los casos anteriores...
        default:
            alert("Chequear lotes-script linea 14")
            break
    }
}

//Función que se llama cuando el botón "Carga" es presionado 
function cargar(){
    //Hacer la pantalla de cargar (ver si pop up o común)
    alert("Pantalla de carga");
}

//Función que se llama cuando el botón "Modificar" es presionado 
function modificar(){
    alert("Pantalla de modificar");
}

//Función que se llama cuando el botón "Visualizar" es presionado 
function visualizar(){
    alert("Pantalla de visualizar");
}

//Función que se llama cuando el botón "Atrás" es presionado 
function atras(){
    alert("Pantalla anterior");
}