function changeName(id, nombre) {
    var iframe = document.getElementById(id);
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
    doc.getElementById('titulo').innerHTML = nombre;
}

function tamañoBotonera(id) {
    document.getElementById(id).style.height = document.getElementById(id).contentWindow.document.body.scrollHeight + 'px';
}

/* Por el momento usado en app-script.js
document.querySelectorAll(".btn-botonera").forEach(item => {
    item.addEventListener('click', event => {
        alert("coño")
    })
})
*/