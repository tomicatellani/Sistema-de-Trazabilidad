document.getElementById('welcome-h1').innerHTML = "Bienvenido,<span id='welcome-bold'></span>";
document.getElementById('welcome-bold').innerHTML = " Admin" //Here will be name returned by the database according to the username on login.js

document.getElementById("welcome-h1").addEventListener("animationend", () => {
  document.getElementById("message-container").style.animationPlayState = "running";
})

//Cuando la animación termina...
setTimeout(() => {
  var a = document.createElement('a'); //Crea una etiqueta <a>
  a.setAttribute("href", "../menu/menu.html"); //Asigna la ruta
  document.body.appendChild(a); //La incluye en el body
  a.click();
}, 5000);

