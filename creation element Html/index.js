// selection mes elements html
const creer = document.querySelector(".btn-bg");
const element = document.querySelector("#element");
const contenu = document.querySelector("#contenu");
const input = document.querySelector("input");

// ajouter un ecouteur d'evenement au niveau du button creer
creer.addEventListener("click", () => {
  creationElement("element", input.value.toLowerCase(), contenu.value);
});

// fonction pour creer nos element html
function creationElement(idContainer, element, textNode) {
  // variable pour recuperer l'id
  const containerElement = document.getElementById(idContainer);
  const balises =
    element === "div" ||
    element === "p" ||
    element === "li" ||
    element === "body" ||
    element === "section" ||
    element === "a" ||
    element === "h1" ||
    element === "h2" ||
    element === "h6" ||
    element === "main" ||
    element === "aside" ||
    element === "table" ||
    element === "tbody" ||
    element === "thead" ||
    element === "td" ||
    element === "th" ||
    element === "tr" ||
    element === "h3" ||
    element === "h4" ||
    element === "h5" ||
    element === "header" ||
    element === "footer" ||
    element === "ul" ||
    element === "ol" ||
    element === "br" ||
    element === "label" ||
    element === "input" ||
    element === "button" ||
    element === "form" ||
    element === "select" ||
    element === "option" ||
    element === "u" ||
    element === "center" ||
    element === "code" ||
    element === "audio" ||
    element === "video" ||
    element === "adress" ||
    (element === "article") |
      (element === "caption") |
      (element === "details") |
      (element === "dialog") |
      (element === "dl") |
      (element === "em") |
      (element === "strong") |
      (element === "dt") |
      (element === "dir") |
      (element === "strong") |
      (element === "fieldset") |
      (element === "figure") |
      (element === "font") |
      (element === "frame") |
      (element === "head") |
      (element === "title") |
      (element === "meta") |
      (element === "link") |
      (element === "hr") |
      (element === "pre") |
      (element === "mark") ||
    element === "img" ||
    element === "nav" ||
    element === "progress" ||
    element === "span" ||
    element === "style" ||
    element === "sub" ||
    element === "sup" ||
    element === "textarea" ||
    element === "tfoot" ||
    element === "wbr" ||
    element === "i" ||
    element === "legend";
  //   condition pour cree les elements

  if (input.value.trim() === "") {
    alert("Merci de saisir une balise html");
  } else if (containerElement && balises) {
    const liNode = document.createElement(element);
    const liTextNode = document.createTextNode(textNode);
    liNode.append(liTextNode);
    containerElement.appendChild(liNode);
  } else {
    alert(`Desole [${input.value}] n'est pas un element HTML`);
    throw new Error(`Cet element ${idContainer} n'existe pas dans le dom`);
  }
  // renitialiser le valeurs de mon input et le textarea
  input.value = "";
  contenu.value = "";
}
