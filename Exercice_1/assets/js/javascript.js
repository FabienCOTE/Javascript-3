var x = document.getElementById("image1");

//On recherche ID image1 dans le fichier HTML pour lui appliquer la fonction mouseOver et mouseOut
x.addEventListener("mouseover", mouseOver);
x.addEventListener("mouseout", mouseOut);

//Fonction mouseOver
function mouseOver() {
  //On applique à l'image une bordure de 3px en rouge
  x.style.border = "3px solid red";
}

//Fonction mouseOut
function mouseOut() {
  //On retire la bordure
  x.style.border = "none";
}
