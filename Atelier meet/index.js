// fonction pour afficher mes elements creer
function creationElement(balises, text) {
  // creation balise.
  if (
    balises === "div" ||
    balises === "p" ||
    balises === "li" ||
    balises === "body" ||
    balises === "section" ||
    balises === "a" ||
    balises === "h1" ||
    balises === "h2" ||
    balises === "h6" ||
    balises === "main" ||
    balises === "aside" ||
    balises === "table" 
  ) {
    const balise = document.createElement(balises);

    // creation contenue du balise.
    const textBalise = document.createTextNode(text);

    //afficher le text dans la balise
    balise.append(textBalise);

    // afficher la balise dans mon element html avec le dom
    document.getElementById("main").append(balise);
  } else {
    alert("ceux-ci n'est op une balise");
  }
}
creationElement("main", "Je suis un div");
