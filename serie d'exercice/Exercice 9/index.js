// Grâce à la fonction prompt(), demander l'âge de l'utilisateur, 
// puis à l'aide d'une condition, déterminer et afficher via une 
// boite de dialogue si l'utilisateur est mineur ou majeur. Pour 
// cet exercice on considère qu'un individu est majeur à partir de 18 ans.

let votreAge = prompt("Quel est votre age");
if(votreAge >= 18){
    alert("Vous etes majeur !")
} else{
    alert("Vous etes mineur !")
}