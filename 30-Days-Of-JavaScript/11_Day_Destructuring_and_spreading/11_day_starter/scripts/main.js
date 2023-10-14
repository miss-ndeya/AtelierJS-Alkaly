const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
console.log("==========Level 1===========");
// Déstructurez et attribuez les éléments du tableau de constantes
// à e, pi, gravité, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravité, humanBodyTemp, waterBoilingTemp] = constants;
console.log("1.",e, pi, gravité, humanBodyTemp, waterBoilingTemp);

// Déstructurer et attribuer les éléments du
// tableau country à fin, est, sw, den, nor

let [fin, est, sw, den, nor] = countries;
console.log("2.",fin, est, sw, den, nor);

// Déstructurez l'objet rectangle
// par ses propriétés ou ses clés.
let { width: w, height: h, area: A, perimeter: p } = rectangle;
console.log("3.",w, h, A, p);
