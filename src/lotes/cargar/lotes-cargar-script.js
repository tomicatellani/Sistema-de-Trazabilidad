try {
    alert("en try")
    const mysql = requirejs('mysql');
} catch (error) {
    alert(error)
}

let campo = document.getElementById("lotes-cargar-select-campo");
let lote = document.getElementById("lotes-cargar-numero-lote");
let hectareas = document.getElementById("lotes-cargar-hectareas");
let cultivo = document.getElementById("lotes-cargar-select-cultivo");
let form = document.getElementById("form-lotes-cargar");

//Cuando se aprieta aceptar...
document.getElementById("lotes-cargar-btn-aceptar").addEventListener('click', () => {
    //Valida que todos los inputs estén completos
    validarVacios(campo)
    validarVacios(lote);
    validarVacios(hectareas);
    validarVacios(cultivo);
});

//Cuando el formulario hace el submit...
form.addEventListener("submit", async () => {
    alert("entra");
    //LOT_COD
    //LOT_NUMERO
	//LOT_CULTIVO
	//LOT_HECTAREAS
    //LOT_CAM_COD

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "toca2002",
        database: "sdtdl_bdd"
    });

    await connection.query("INSERT INTO LOTES (LOT_COD, LOT_NUMERO, LOT_CULTIVO, LOT_HECTAREAS) VALUES ?", 1, 1, "maiz", 2);
    const data = await connection.query("SELECT * FROM LOTES");
    alert(data);
})


//Cuando el input pasado por parámetro es inválido pide al usuario que lo complete, cuando se ingresa un nuevo valor el mensaje desaparece
function validarVacios(input){
    input.addEventListener("invalid", () => {
        input.setCustomValidity("Por favor, completar este campo")
    });

    input.addEventListener("input", () => {
        input.setCustomValidity("");
    });
}

//Previene que se ingresen símbolos
document.getElementById("lotes-cargar-numero-lote").addEventListener("keypress", (e) => {
    if(e.key != "0" && e.key != "1" && e.key != "2" && e.key != "3" && e.key != "4" && e.key != "5" && e.key != "6" && e.key != "7" && e.key != "8" && e.key != "9"){
        e.preventDefault()
    }
})

document.getElementById("lotes-cargar-hectareas").addEventListener("keypress", (e) => {
    if(e.key != "0" && e.key != "1" && e.key != "2" && e.key != "3" && e.key != "4" && e.key != "5" && e.key != "6" && e.key != "7" && e.key != "8" && e.key != "9"){
        e.preventDefault()
    }
})