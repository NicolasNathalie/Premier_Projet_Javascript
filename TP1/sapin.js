let nb;
let message = "";

do
{
	nb = parseInt(prompt("Entrez un nombre de ligne: "));
} while (nb <= 0);

for (let ligne = 1; ligne <= nb; ligne++) {
  for (let colSpace = 0; colSpace < (nb-ligne)*2; colSpace++) { // Plus la ligne est grande moins le nombre d'espace est petit
    message += "&nbsp;";
  }
  for (let colEtoile = 0; colEtoile < ligne*2-1; colEtoile++) { // Plus la ligne est grande moins le nombre d'étoile est grand
    message += "*";
  }
  message += "<br>";
}

document.getElementById("app").innerHTML = message;