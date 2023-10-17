            console.log("===========Level 1============")

// Afficher le tableau des pays sous forme de tableau
// console.table(countries)

/*
// Afficher l'objet pays sous forme de tableau
for(i = 0 ; i <= countries.length; i++){
    console.table(countries[i])
}
*/

// Utilisez console.group() pour regrouper les journaux
console.group('Countries')
console.log(countries)
console.groupEnd()

                console.log("===========Level 2============")

// Écrivez un message d'avertissement
//  en utilisant console.warn()
console.warn("Ceci est un message avertissement")

// Écrivez un message d'erreur 
// en utilisant console.error()
console.error("Ceci est un  message d'erreur")

            console.log("===========Level 3============")
// Vérifiez la différence de vitesse entre les boucles 
// suivantes : while, for, for of, forEach

/*
let i = 0;
while (i < countries.length) {
    console.log(countries[i]);
    i++;
}
*/

/*
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
*/

// countries.forEach((countrie) => console.log(countrie))

for (const i of countries) {
    console.log(i)
}



