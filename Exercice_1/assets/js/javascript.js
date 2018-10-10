//On recherche ID image1 dans le fichier HTML pour lui appliquer la fonction mouseOver et mouseOut
document.getElementById("image1").addEventListener("mouseover", mouseOver);
document.getElementById("image1").addEventListener("mouseout", mouseOut);

//Fonction mouseOver
function mouseOver() {
  //On applique à l'image une bordure de 3px en rouge
  document.getElementById("image1").style.border = "3px solid red";
}

//Fonction mouseOut
function mouseOut() {
  //On retire la bordure
  document.getElementById("image1").style.border = "none";
}
