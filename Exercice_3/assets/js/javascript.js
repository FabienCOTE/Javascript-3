//Création de trois variables pour green, red et blue
var g = document.getElementsByClassName("green");
var r = document.getElementsByClassName("red");
var b = document.getElementsByClassName("blue");

//On selectionne le premier élément de la class et on lui applique une fonction
g[0].addEventListener("click", green);
r[0].addEventListener("click", red);
b[0].addEventListener("click", blue);

//Fonction green
function green() {
  document.getElementById("text").style.color = "green";
}

//Fonction red
function red() {
  document.getElementById("text").style.color = "red";
}

//Fonction blue
function blue() {
  document.getElementById("text").style.color = "blue";
}
