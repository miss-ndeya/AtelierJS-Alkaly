// A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 
// nombres aléatoires sous la forme d'une liste à puces, compris entre 0 
// et 10 (inclus). Via une condition, afficher en console si le nombre 
// 10 fait partie du tirage.

for(let i = 0; i < 10 ; i++) {
    let dix = Math.floor(Math.random() * 100)
    if (dix === 10) {
        console.log("le nombre 10 fait partie du tirage.");             
    }
    document.getElementById("container").innerHTML += 
    `<ul>
        <li>${Math.floor(Math.random() * 100)}</li>
    </ul>`
}
