// Déclarez un tableau vide ;
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log("Numbers:", numbers);

// Déclarez un tableau avec plus de 5 éléments
const arrays = [1, 2, 3, 4, 5];

// Trouvez la longueur de votre tableau
const lengthArrays = arrays.length;
console.log(lengthArrays);

// Récupère le premier élément, l'élément du milieu et le dernier élément du tableau

const premierElement = arrays[0];
const elementMilieu = arrays[2];
const dernierElement = arrays[arrays.length - 1];
console.log({ premierElement, elementMilieu, dernierElement });

// Déclarez un tableau appelé MixedDataTypes , placez différents types de données dans
// le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5

const MixedDataTypes = [
  [1, 2, 3],
  "ndeye",
  33.56,
  "programmation",
  21,
  "Yoff",
  { nom: "ndiaye", prenom: "ndeye awa" },
];
console.log(MixedDataTypes.length);

// Déclarez une variable de tableau nommée itCompanies et attribuez les valeurs
// initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Imprimez le tableau en utilisant console.log()
console.log('le nombre d\'entreprises dans le tableau est',itCompanies);

// Imprimer la première entreprise, la deuxième et la dernière entreprise
console.log('la première entreprise du tableau est :' , itCompanies[0] );
console.log('la deuxième entreprise du tableau est :' , itCompanies[1] );
console.log('la dernière entreprise du tableau est :' , itCompanies[itCompanies.length -1] );

// Imprimez chaque entreprise
itCompanies.forEach(function(itCompanie) {
    console.log(itCompanie);
});

// Changez le nom de chaque entreprise en majuscules un par un et imprimez-les
itCompanies.forEach(function(itCompanie) {
    console.log('entreprise en majuscule',itCompanie.toUpperCase());
});

// Imprimez le tableau comme une phrase : Facebook, Google, Microsoft, Apple, 
// IBM, Oracle et Amazon sont de grandes sociétés informatiques.
let phrase = itCompanies.slice(0, -1).join(', ') + ' et ' + itCompanies[itCompanies.length - 1]
console.log(phrase + ' sont de grandes sociétés informatiques.');

// Vérifiez si une certaine entreprise existe dans le tableau itCompanies. 
// Si elle existe retournez l'entreprise sinon retournez une entreprise introuvable

let entreprise = prompt("Entrez une entreprise :")
itCompanies.includes(entreprise) ? console.log(entreprise) : console.log("une entreprise introuvable");

// Filtrez les entreprises qui ont plus d'un « o » sans la méthode de filtrage

// Déclare un tableau nommé itCompanies avec les valeurs initiales
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Tableau pour stocker les entreprises avec plus d'un 'o'
let entreprisesAvecPlusDO = [];

// Boucle for pour itérer sur chaque entreprise
for (let i = 0; i < itCompanies.length; i++) {
    let compteurO = 0;
    

    // Boucle pour compter le nombre d'occurrences de 'o' dans l'entreprise actuelle
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() === 'o') {
            console.log(itCompanies[i][j], 'oi');
            compteurO++;
        }
    }

    // Si l'entreprise a plus d'un 'o', l'ajouter au tableau des résultats
    if (compteurO > 1) {
        entreprisesAvecPlusDO.push(itCompanies[i]);
    }
}

console.log("Entreprises avec plus d'un 'o':", entreprisesAvecPlusDO);
// Trier le tableau à l'aide de la méthode sort()
let trierItCompanies = itCompanies.sort()
console.log("Tableau itCompanes trier",trierItCompanies);

// Inversez le tableau en utilisant la méthode reverse()
let reverseItCompanies = itCompanies.reverse()
console.log('Tableau itCompanies reverser',reverseItCompanies);

// Séparez les 3 premières entreprises du tableau
const troisPremiersElements = itCompanies.slice(0, 3)
console.log('Trois premiers elements du tableau',troisPremiersElements);

// Séparez les 3 dernières entreprises du tableau
const troisDernierElements = itCompanies.slice(3, 6)
console.log("Trois derniers elements du tableau",troisDernierElements);

// Supprimez la première société informatique du tableau
const supprimerPremierElement = itCompanies.shift()
console.log(supprimerPremierElement);

// Supprimer la dernière société informatique du tableau
const supprimerDernierElement = itCompanies.pop()
console.log(supprimerDernierElement);

// Supprimer toutes les sociétés informatiques
itCompanies = []
console.log(itCompanies);