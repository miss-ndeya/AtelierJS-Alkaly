/*******Exercices : niveau 1*******/
let firstName = "Ndeye awa";
let lastName = "Ndiaye";
let country = "Afrique";
let city = "Dakar";
let age = 28;
let isMarried = true;
let year = 2024;
console.log([
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year,
]);

let dixString = "10";
let dixNumber = 10;

console.log(dixString == dixNumber);

let numParseint = parseInt("9.8");
console.log(dixNumber == numParseint);

// Écrivez trois instructions JavaScript qui fournissent une valeur véridique.
let monde = true;

let x = 5;
let y = 3;
let superieur = x > y;

let array = [1, 2];
let inferieur = array.length < 4;
console.log([monde, superieur, inferieur]);

// Écrivez trois instructions JavaScript qui fournissent une valeur fausse.
let mensonge = false;

let cinq = 5;
let quatre = 4;
let comparer = cinq == quatre;

let valeur = array.length > 3;

console.log([mensonge, comparer, valeur]);

// Utilisez l'objet Date pour effectuer les activités suivantes

// Quelle est la date d'aujourd'hui?
const date = new Date();

// I.Quelle année est-il aujourd'hui ?
const année = date.getFullYear();

// II. Quel est le mois d'aujourd'hui sous forme de chiffre ?
const mois = date.getMonth() + 1;

// Quel est le jour d'aujourd'hui en chiffre ?
const jour = date.getDate();

// Quels sont les horaires maintenant ?
const horaire = date.getHours();

// Quelles sont les minutes maintenant ?
const minute = date.getMinutes();

// Découvrez le nombre de secondes écoulées depuis le 1er janvier 1970 jusqu'à aujourd'hui.
const seconde = date.getTime();

console.log([jour, mois, année, horaire, minute, seconde]);

/******Exercices : niveau 2*******/
// Écrivez un script qui invite l'utilisateur à saisir la base et la hauteur du
// triangle et à calculer l'aire d'un triangle (aire = 0,5 xbxh).

let base = parseFloat(prompt("Entrez la base du triangle :"));

let hauteur = parseFloat(prompt("Entrez la hauteur du triangle :"));

let calculAire = 0.5 * base * hauteur;
console.log("L'aire du triangle est : " + calculAire);

// Écrivez un script qui invite l'utilisateur à saisir le côté a, le côté b et le côté c
// du triangle et à calculer le périmètre du triangle (périmètre = a + b + c)
let coteA = parseFloat(prompt("Entrez la longueur du côté a du triangle :"));

let coteB = parseFloat(prompt("Entrez la longueur du côté b du triangle :"));

let coteC = parseFloat(prompt("Entrez la longueur du côté c du triangle :"));

let perimetre = coteA + coteB + coteC;

console.log("Le périmètre du triangle est : " + perimetre);

// Obtenez la longueur et la largeur à l'aide de l'invite et calculez une aire de rectangle
// (surface = longueur x largeur et périmètre du rectangle (périmètre = 2 x (longueur + largeur))
let longueur = parseFloat(prompt("Entrez la longueur du rectangle :"));

let largeur = parseFloat(prompt("Entrez la largeur du rectangle :"));

let aire = longueur * largeur;

let perimetreTriangle = 2 * (longueur + largeur);

console.log("L'aire du rectangle est : " + aire);
console.log("Le périmètre du rectangle est : " + perimetreTriangle);

// Obtenez le rayon à l'aide de l'invite et calculez l'aire d'un cercle (aire = pi xrxr)
//  et la circonférence d'un cercle (c = 2 x pi xr) où pi = 3,14.
let rayon = parseFloat(prompt("Entrez le rayon du cercle :"));

let aireCercle = 3.14 * rayon * rayon;

let circonference = 2 * 3.14 * rayon;

console.log("L'aire du cercle est : " + aireCercle);
console.log("La circonférence du cercle est : " + circonference);

// Écrivez un script qui invite un utilisateur à saisir les heures et
// le tarif horaire. Calculer le salaire de la personne ?
let heureTravail = parseFloat(prompt("Entrez l'heure :"));
let horaires = parseFloat(prompt("Entrez le tarif horaires:"));

let calculeSalaire = heureTravail * horaires;
console.log("le salaire de la personne est : " + calculeSalaire);

// Si la longueur de votre nom est supérieure à 7, disons, votre nom est long, sinon dites que votre nom est court.

let nom = prompt("Entrez votre nom:");

nom = nom.length > 7 ? "votre nom est long" : "votre nom est court";
console.log(nom);

// Comparez la longueur de votre prénom et la longueur de votre nom de famille et vous devriez obtenir ce résultat.
let firstNames = "Asabeneh";
let lastNames = "Yetayeh";

let comparaison =
  firstNames.length > lastNames.length
    ? "Your first name, Asabeneh is longer than your family name, Yetayeh"
    : "Your first name, Yetayeh is small than your family name, Asabeneh";
console.log(comparaison);

// Déclarez deux variables myAge et yourAge et attribuez-leur des valeurs initiales ainsi que myAge et yourAge.
let monAge = 25;
let votreAge = 18;
console.log("I am " + monAge + " et vous");

// En utilisant l'invite, obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, 
// autorisez l'utilisateur à conduire, sinon dites-lui d'attendre un certain nombre d'années.
let annéeNaissance = parseFloat(prompt("Entrez votre annnee de naissance : "))

annéeNaissance = annéeNaissance > 18 ? "vous pouvez conduire" : "Merci d'attendre l'age de 18ans !"
console.log(annéeNaissance);

/******Exercices : niveau 3*******/

// Créez un format d’heure lisible par l’homme à l’aide de l’objet Date time.
// L'heure et les minutes doivent toujours être composées de deux chiffres
// (7 heures doivent être 07 et 5 minutes doivent être 05).
let heures = date.getHours();
let minutes = date.getMinutes();

heures = heures < 10 ? "0" + heures : heures;

minutes = minutes < 10 ? "0" + minutes : minutes;

let heureActuel = heures + "h" + ":" + minutes + "mn";

console.log("Il est " + heureActuel);
