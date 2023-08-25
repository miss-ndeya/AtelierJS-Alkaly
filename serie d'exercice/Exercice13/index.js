// Déclarer une variable avec le nom de votre choix et avec la valeur 0. 
// Tant que cette variable n'atteint pas 20, il faut :
// l'afficher dans la page HTML;
// incrémenter sa valeur de 2 ;

for (let monChoix = 0; monChoix <= 20; monChoix+=2) {
    document.getElementById("container").innerHTML +=
    `<p>Mon choix est : ${monChoix}</p>`
}