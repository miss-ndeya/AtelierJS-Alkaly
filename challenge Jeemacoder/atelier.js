let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || []

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const utilisateur = {
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
      };
      utilisateurs.push(utilisateur);
      localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
    
      console.log(utilisateurs);
    
      document.querySelector("form").reset()
    
  });
  localStorage.clear()