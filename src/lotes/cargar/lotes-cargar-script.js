//Con form method=POST/GET es mejor, pero así es más fácil 

//Cuando se aprieta aceptar...
document.getElementById("lotes-cargar-btn-aceptar").addEventListener('click', () => {
    let campo = document.getElementById("lotes-cargar-select-campo");
    let lote = document.getElementById("lotes-cargar-numero-lote");
    let hectareas = document.getElementById("lotes-cargar-hectareas");
    let cultivo = document.getElementById("lotes-cargar-cultivo");

    //Valida que todos los inputs estén completos. De ser así asigna 'true' a la variable
    loteCompleto = validarVacios(lote);
    hectareasCompleto = validarVacios(hectareas);
    cultivoCompleto = validarVacios(cultivo);

    //Si todas las variables son 'true' (es decir que están todos los inputs completos) muestra un mensaje (que debe reemplazarse por la query a la bdd más tarde)
    if(loteCompleto == true && hectareasCompleto == true && cultivoCompleto == true){
        alert("Campo: " + campo.value + ". \nLote: " + lote.value + ". \nHectáreas: " + hectareas.value + ". \nCultivo: " + cultivo.value + ".");   //Reemplazar por la query a bdd
    }
});

//Valida que no haya espacios en blanco en los campos. De haberlos retorna true (que es asignado a una variable para validar que cuando todas sean verdaderas se realice la query)
function validarVacios(input){
    if (input.checkValidity() == false) {
        //Si hay algún input está vacío agisna un listener para que al escribir se borre el mensaje de error
        input.addEventListener("input", () => {
            if(!input.checkValidity()){
                input.setCustomValidity("");
            }
        });
        //Mensaje de error si un input está vacío
        input.setCustomValidity("¡Completar!");
    } else {
        //Si no hay campos vacíos retorna 'true'
        return true;
    } 
}