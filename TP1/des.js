/*Faire un programme qui affiche 2 nombres tirés aléatoirement entre 0 et 15 et qui demande le résultat de l’addition.
L’utilisateur doit donner la bonne réponse. Tant que la bonne réponse n’est pas donnée, on réaffiche la même question.
Quand la bonne réponse est donnée, le programme se répète. 
L’utilisateur doit saisir la lettre “q” pour quitter le programme.*/


/* Faire un programme qui affiche 2 nombres tirés aléatoirement entre 0 et 15 */

var min = 0; 
var max  = 15;
var resultat = 0;
var nb;             

    function getRandomNumber(min, max) {
       return min+Math.floor(Math.random()*(max-min));
    }

let nb1 = 0;
let nb2 = 0;
    
while (nb !== "q") {
  if(nb == resultat)
  {
    nb1 = getRandomNumber(min, max);
    nb2 = getRandomNumber(min, max);
    resultat = nb1 + nb2;
  }

  nb = prompt('quelle est la somme de :'+ nb1 +'+'+ nb2);
  console.log(nb)
}

