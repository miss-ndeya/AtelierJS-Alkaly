const btnAjouter = document.querySelector(".btn-success");
const btnModifier = document.querySelector(".btn-warning");
const container = document.getElementById("container");

let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
let modifierUtilisateur = "";

window.onload = rechargerPage();

function rechargerPage() {
  if (utilisateurs) {
    container.innerHTML = "";
    utilisateurs.forEach((utilisateur) => {
      afficherUtilisateur(utilisateur);
    });
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const utilisateur = {
    id: Math.random(),
    prenom: document.getElementById("prenom").value,
    nom: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
  };

  if (
    utilisateur.prenom &&
    utilisateur.nom &&
    utilisateur.email &&
    utilisateur.telephone
  ) {
    document.querySelector(".alert").style.display = "none";
    utilisateurs.push(utilisateur);
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
    afficherUtilisateur(utilisateur);
    document.querySelector("form").reset();
  } else {
    document.querySelector(".alert").style.display = "block";
  }
});

function afficherUtilisateur(utilisateur) {
  let ligne = document.createElement("tr");
  ligne.innerHTML += `
      <td>${utilisateur.prenom}</td>
      <td>${utilisateur.nom}</td>
      <td>${utilisateur.email}</td>
      <td>${utilisateur.telephone}</td>
      <td><button class="btn bg-warning modifier">Modifier</button></td>
      <td><button onclick='supprimer(${utilisateur.id})' class="btn bg-danger text-white">Supprimer</button></td>
      `;
  ligne.querySelector(".modifier").addEventListener("click", () => {
    modifier(utilisateur);
  });
  container.appendChild(ligne);
}

function modifier(utilisateur) {
  modifierUtilisateur = utilisateur;
  document.getElementById("prenom").value = utilisateur.prenom;
  document.getElementById("nom").value = utilisateur.nom;
  document.getElementById("email").value = utilisateur.email;
  document.getElementById("telephone").value = utilisateur.telephone;
  btnAjouter.style.display = "none";
  btnModifier.style.display = "block";
}

btnModifier.addEventListener("click", () => {
  if (modifierUtilisateur) {
    modifierUtilisateur.prenom = document.getElementById("prenom").value;
    modifierUtilisateur.nom = document.getElementById("nom").value;
    modifierUtilisateur.email = document.getElementById("email").value;
    modifierUtilisateur.telephone = document.getElementById("telephone").value;

    utilisateurs = utilisateurs.map((utilisateur) =>
      utilisateur.id !== modifierUtilisateur.id
        ? utilisateur
        : modifierUtilisateur
    );
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
    document.querySelector("form").reset();
    rechargerPage();
    modifierUtilisateur = "";

    btnAjouter.style.display = "block";
    btnModifier.style.display = "none";
  }
});

function supprimer(id) {
  utilisateurs = utilisateurs.filter((utilisateur) => utilisateur.id !== id);
  rechargerPage();
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}
