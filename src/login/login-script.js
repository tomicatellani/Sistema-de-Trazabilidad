//Declaration of user and password of the administrator
var adminUserCredential = "admin";
var adminPassCredential = "admin";

//When submit ("Accdeder") button is pressed...
document.getElementById('form').onsubmit = function() {

  //Gets what was written in the user and password fields
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  //If the user and password written matches the administrator credentials...
  if ((user == adminUserCredential) && (pass == adminPassCredential)) {
    //Credentials are correct
    console.log("in");
    welcome();
  } else {
    //Credentials are incorrect
    //Shows the message "Credenciales incorrectas"
    incorrect('show');
  }
  //I don't know why this is required, but it is
  return false;
}

//This function is called with the parameter 'hide' or 'show' to hide or show the message "Credenciales incorrectas"
function incorrect(whatToDo){
  let hideOrShow;
  switch (whatToDo) {
    //In case the parameter is 'hide' the local variable hideOrShow will store "none"
    case 'hide':
      hideOrShow = "none";
      break;
    //In case the parameter is 'show' the local variable hideOrShow will store "inline"
    case 'show':
      hideOrShow = "inline";
      break;
    //In case the parameter is neither 'hide' nor 'show' an alert will be shown
    default:
      alert("No coinciden valores en changeOpacity() en script.js");
  }
  //The "display" property of the element with 'id=incorrect' will be either 'none' or 'show' according to switch(whatToDo) instructions
  document.getElementById('incorrect').style.display = hideOrShow;
}

function welcome(){
  document.getElementById('login-container').style.animationPlayState = "running"
  document.getElementById('user').value = "";
  document.getElementById('pass').value = "";
}

//Cuando la animación termina...
document.getElementById("login-container").addEventListener("animationend", () => {
  let a = document.createElement('a'); //Crea una etiqueta <a>
  a.setAttribute("href", "../welcome/welcome.html"); //Asigna la ruta
  document.body.appendChild(a); //La incluye en el body
  a.click(); //Y la clickea
});