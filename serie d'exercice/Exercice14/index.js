const x = 2;
const y = 3;
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