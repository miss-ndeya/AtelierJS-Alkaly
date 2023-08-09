// Au bon endroit dans la déclaration de fonction, choisissez un nom pour le paramètre
// de votre fonction. N'oubliez pas, ce sera un tableau de nombres.
// Pour calculer une moyenne, on ajoute toutes les valeurs ensemble,
//  puis on divise par le nombre de valeurs.

// Créez une variable qui stockera la somme de tous les nombres du tableau. Initialisez-la avec la valeur zéro.

// Sachant que le paramètre reçu est un tableau de nombres, utilisez une
// boucle for pour ajouter chaque nombre du tableau à votre variable somme.

//  Créez une constante qui contient le résultat de la somme finale divisée
//  par le nombre de valeurs dans le tableau reçu en argument.

// Faites en sorte que la fonction retourne le résultat final.

const calculateAverageRating = (tableaux) => {
  let somme = 0;
  let nombreValeur = tableaux.length;

  for (let tableau of tableaux) {
    somme += tableau;
  }

  moyenne = somme / nombreValeur;
  console.log(moyenne);
};
const monTableau = [3, 4, 5, 2];
calculateAverageRating(monTableau);

/***** Définissez des méthodes d'instance et des propriétés ****/

// j'ai pas compris cette partie et les parties suivantes du coup les exercices je n'arrive pas a les continuer 
// Je vais essayer de les comprendre avant le prochain atelier in cha allah .