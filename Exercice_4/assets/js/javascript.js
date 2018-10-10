//Création d'une variable avec querySelector qui permet de selectionner le premier élément
var x = document.querySelector("[name='button']");

//Création d'un événement sur le bouton du formulaire.
//On lui applique la fonction control
x.addEventListener("click", control);

//Fonction control
function control() {
  //Création de deux variables pour récupérer le "password" et le "confirmPassword"
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");

  //Si "password" et "confirmPassword" sont identique bordure vert
  if (password.value == confirmPassword.value) {
    password.style.border = "5px solid green";
    confirmPassword.style.border = "5px solid green";
 }
 //Sinon bordure rouge
 else {
   password.style.border = "5px solid red";
   confirmPassword.style.border = "5px solid red";
 }
}
