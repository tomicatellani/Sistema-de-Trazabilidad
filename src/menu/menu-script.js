document.getElementById("botonera").onload = function(){
    tamañoBotonera();
    changeName("Menú principal");
}

document.querySelectorAll(".btn-botonera").forEach(item => {
    item.addEventListener('click', event => {
        pantallaMenu(item);
    })
})
