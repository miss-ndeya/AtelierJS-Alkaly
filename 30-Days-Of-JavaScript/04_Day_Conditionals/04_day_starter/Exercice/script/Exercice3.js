let mois = prompt("Entrez un mois");
let année = prompt("Entrez l'année")
let estBissextile = (année % 4 === 0 && (année % 100 !== 0 || année % 400 === 0));
estBissextile = estBissextile ? 29 : 28;

switch (mois) {
  case "janvier":
  case "mars":
  case "mai":
  case "juillet":
  case "aout":
  case "octobre":
  case "decembre":
    console.log(`${mois} compte 31 jours.`);
    break;
  case "avril":
  case "juin":
  case "septembre":
  case "novembre":
    console.log(`${mois} compte 30 jours.`);
    break;
  case "fevrier":
    console.log(`${mois} compte ${estBissextile} jours.`);
    break;
  default:
    console.log("Saisi un mois valid");
}



