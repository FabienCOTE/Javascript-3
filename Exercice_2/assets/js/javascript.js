//Création de deux variables avec querySelectorAll qui permet de selectionner tous les éléments
//On selectionne le premier élément [0]
var x = document.querySelectorAll("[href='#']")[0];
//On selectionne le second élément [1]
var y = document.querySelectorAll("[href='#']")[1];

//Création d'un événement sur le bouton "afficher" et "masquer"
//On applique la fonction show et hide
x.addEventListener("click", show);
y.addEventListener("click", hide);

//Fonction show
function show() {
  document.getElementById("text").style.display = "block";
}

//Fonction hide
function hide() {
  document.getElementById("text").style.display = "none";
}
