/**********Exercices : Niveau 1*********/
// Déclarez une fonction fullName et elle affiche votre nom complet.
function fullName() {
    console.log("Ndeye Awa NDIAYE");
}
fullName()

// Déclarez une fonction fullName et maintenant elle prend firstName, 
// lastName comme paramètre et elle renvoie votre nom complet.
function lastName() {
    console.log("Ndeye Awa NDIAYE");
}
lastName()

// Déclarez une fonction addNumbers et elle prend deux deux paramètres et renvoie la somme.
function addNumbers(num1, num2) {
    let sum = num1 + num2
    console.log(sum);
}
addNumbers(34, 10)

// L'aire d'un rectangle est calculée comme suit : aire = longueur x largeur . 
// Écrivez une fonction qui calcule AreaOfRectangle .
function AreaOfRectangle(longueur, largeur) {
    let calculAreaOfRectangle = longueur * largeur
    console.log(calculAreaOfRectangle);
}
AreaOfRectangle(7, 4)

// Le périmètre d'un rectangle est calculé comme suit : périmètre= 2x(longueur + largeur) . 
// Écrivez une fonction qui calcule volumeOfRectPrism .
function périmètreOfRectangle(longueur, largeur) {
    let calculpérimètreOfRectangle = 2 * (longueur + largeur)
    console.log(calculpérimètreOfRectangle);
}
périmètreOfRectangle(7, 4)

// Le volume d'un prisme rectangulaire est calculé comme suit : 
// volume = longueur x largeur x hauteur . 
// Écrivez une fonction qui calcule volumeOfRectPrism .

function volumeOfRectPrism(longueur, largeur, hauteur) {
    let calculvolumeOfRectPrism = longueur + largeur * hauteur
    console.log(calculvolumeOfRectPrism);
}
volumeOfRectPrism(7, 4, 70)

// La densité d'une substance est calculée comme suit : densité= masse/volume . 
// Écrivez une fonction qui calcule la densité .
function densiteSubstance(masse, volume) {
    let calculdensiteSubstance = masse / volume
      console.log(calculdensiteSubstance);
}
densiteSubstance(157, 2)

// La vitesse est calculée en divisant la distance totale parcourue par un objet en 
// mouvement divisée par le temps total mis. Écrivez une fonction qui calcule 
// la vitesse d'un objet en mouvement, speed .
function speed(distance, temps) {
    let calculSpeed = distance / temps
      console.log(calculSpeed);
}
speed(75, 3)

// Le poids d'une substance est calculé comme suit : poids = masse x gravité . 
// Écrivez une fonction qui calcule le poids .
function poids(massse, graviter) {
    let calculPoids = massse * graviter
      console.log(calculPoids);
}
poids()





