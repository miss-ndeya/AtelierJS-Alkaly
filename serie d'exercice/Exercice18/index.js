// A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 
// nombres aléatoires sous la forme d'une liste à puces, compris entre 0 
// et 10 (inclus). Via une condition, compter le nombre de fois où le 
// nombre 10 fait partie du tirage. A la fin du script, insérer en plus
//  dans la page HTML le nombre en question.
let nombres = 0;
for(let i = 0; i < 10 ; i++) {
    let dix = Math.floor(Math.random() * 100)
    if (dix === 10) {
        nombres++    
    }
    document.getElementById("container").innerHTML += 
    `<ul>
        <li>${Math.floor(Math.random() * 100)}</li>
    </ul>`
}
document.getElementById("container").innerHTML += `
<p>le nombre de fois où le nombre 10 fait partie du tirage est de : ${nombres}</p>`

