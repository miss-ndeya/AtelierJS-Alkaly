// selection mes elements html
const contenu = document.querySelector("#contenu");
const input = document.querySelector("input");

// ajouter un ecouteur d'evenement au niveau du button creer
document.querySelector(".btn-bg").addEventListener("click", () => {
  creationElement("element", input.value.toLowerCase(), contenu.value);
});

// fonction pour creer nos element html
function creationElement(idContainer, element, textNode) {
  // variable pour recuperer l'id
  const containerElement = document.getElementById(idContainer);
  const balises = /^(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)$/.test(input.value);;
   
  //   condition pour cree les elements
  if (input.value.trim() === "") {
    alert("Merci de saisir une balise html");
  } else if (containerElement && balises) {
    document.querySelector("#messageErreur").style.display = "none";
    const liNode = document.createElement(element);
    const liTextNode = document.createTextNode(textNode);
    liNode.append(liTextNode);
    containerElement.appendChild(liNode);
  } else {
    document.querySelector("#messageErreur").style.display = "block";
    document.getElementById("baliseNonValid").innerText = `[${input.value}]`;
    throw new Error(`Cet element ${idContainer} n'existe pas dans le dom`);
  }
  // renitialiser le valeurs de mon input et le textarea
  input.value = "";
  contenu.value = "";
}
