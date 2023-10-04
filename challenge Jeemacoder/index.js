const btnAjouter = document.querySelector(".btn-success");
const btnModifier = document.querySelector(".btn-warning");

let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
// window.onload =ajouterUtilisateur()

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  btnAjouter.style.display = "block";
  btnModifier.style.display = "none";
    ajouterUtilisateur();
});

// fonction pour ajouter un utilisateur
function ajouterUtilisateur() {
  const utilisateur = {
    id: Math.random(),
    prenom: document.getElementById("prenom").value,
    nom: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
  };

  utilisateurs.push(utilisateur);
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

  afficherUtilisateur(utilisateur);

  document.querySelector("form").reset();
}

function afficherUtilisateur(utilisateur) {
  document.getElementById("tbody").innerHTML += `<tr>
    <td id="prenomModifier">${utilisateur.prenom}</td>
    <td>${utilisateur.nom}</td>
    <td>${utilisateur.email}</td>
    // <td>${utilisateur.telephone}</td>
    <td style="cursor: pointer"><button onclick='modifier(${utilisateur.id})' class="btn bg-warning">Modifier</button></td>
    <td style="cursor: pointer"><button onclick='supprimer(event)' class="btn bg-danger text-white">Supprimer</button></td>
  </tr>`;
}

function modifier(id) {
  let utilisateur = utilisateurs.find((utilisateur) => utilisateur.id === id);

  document.getElementById("prenom").value = utilisateur.prenom;
  document.getElementById("nom").value = utilisateur.nom;
  document.getElementById("email").value = utilisateur.email;
  document.getElementById("telephone").value = utilisateur.telephone;

  btnAjouter.style.display = "none";
  btnModifier.style.display = "block";

  btnModifier.addEventListener('click', () => {
      utilisateur.prenom = document.getElementById("prenom").value;
      console.log(utilisateur.prenom);
      utilisateur.nom = document.getElementById("nom").value;
      utilisateur.email = document.getElementById("email").value;
      utilisateur.telephone = document.getElementById("telephone").value;

      document.querySelector("form").reset();
      btnModifier.style.display = "none";
      btnAjouter.style.display = "block";
  });
}

function supprimer(event) {
  event.target.parentNode.parentNode.remove();
}
