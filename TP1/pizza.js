/*une pizzeria désire mettre en place un système de commande sur Internet.
Le programme doit demander
●	le nombre de pizza que le client désire ;
●	le choix de pizza :
○	1: fromage 15$
○	2: poivron 16$
○	3: végétarienne 14$
●	le quartier de livraison (1: St Jean, 2: Montcalm, 3: Limoilou) ;
●	si c’est l’anniversaire du client (1: oui, 2: non).
La livraison est gratuite si c’est l’anniversaire du client ou si la livraison est dans le quartier St Jean. Sinon elle est de 5$.
Calculez le prix de la commande pour le nombre de pizzas commandées.
Si le total du prix des pizzas est supérieur à 31$, un rabais de 20% est offert sur le prix total sans les taxes et sans la livraison. 
Affichez les éléments ci-dessous:
●	nombre de pizza commandée ;
●	prix des pizzas avec la réduction de 20% si nécessaire ;
●	prix de la livraison ;
●	total de la commande ;
●	total avec les taxes (14,975%).
On ne prendra pas en compte la gestion des erreurs, si par exemple l’utilisateur entre une lettre ou un chiffre qui n’est pas prévu.*/

let nbPizza = Number(prompt("Nombre de Pizza ?"));
let choixPizza = Number(prompt("Le choix de pizza : 1: Fromage 15$, 2: Poivron 16$ ou 3: Végétarienne 14$"));
let quartierLivraison = Number(prompt("Quartier de livraison : 1: St Jean, 2:  Montcalm ou 3: Limoilou"));
let anniversaire = Number(prompt("Anniversaire : 1: oui ou 2: non"));
let prixLivraison = 5;
let prixTotal = 0;
let somme = 0;
let prixTotalTaxes = 0;
let prixPizza = 0;
let montantRabais = 0; 

// Anniversaire ou quartier St Jean, Livraison gratuite
if (anniversaire == 1 || quartierLivraison == 1) {
    prixLivraison = 0
  }

// Calculez le prix de la commande pour le nombre de pizzas commandées.

  switch (choixPizza) {
    case 1:
        prixPizza = 15;
      break;
    case 2:
        prixPizza = 16;
      break;
    case 3:
        prixPizza = 14;
      break;
    default:
      console.log("Erreur...");
  }
  prixPizza = prixPizza * nbPizza
  prixTotal = prixPizza
  
if (prixTotal => 31) {
    montantRabais = (prixTotal * 20 / 100)
    prixTotal -= montantRabais 
  }
prixTotal += prixLivraison ;
prixTotalTaxes = prixTotal * 14.975 / 100;

// Affichage
document.getElementById('app').innerHTML = 'Nombre de pizza : ' + nbPizza + '<br>'
document.getElementById('app').innerHTML += 'Prix de pizza : ' + prixPizza.toFixed(2) + '$ ' + '(réduction de ' + montantRabais.toFixed(2) + '$)<br>'
document.getElementById('app').innerHTML += 'Prix livraison : ' + prixLivraison.toFixed(2) + '$<br>'
document.getElementById('app').innerHTML += 'Prix total : ' + prixTotal.toFixed(2) + '$<br>'
document.getElementById('app').innerHTML += 'Prix total avec taxes : ' + prixTotalTaxes.toFixed(2) + '$<br>'