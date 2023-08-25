// Avec le code de l'exercice précédent (14) demander via la fonction prompt(), 
// X lignes et Y colonnes puis constuire le tableau HTML et l'insérer dans la page HTML.

const x = prompt("combien de ligne souhaitez vous créer");
const y = prompt("combien de colonne souhaitez vous créer");
let container = document.getElementById("container");

for (let i = 0; i < x; i++) {
    const table = document.createElement("table");
    const lignes = document.createElement("tr");
    
    for (let j = 0; j < y; j++) {
        const colonnes = document.createElement("td");
        colonnes.textContent = "colonne"
        lignes.appendChild(colonnes)
        table.appendChild(lignes)
        
    }
    container.appendChild(table)
}
