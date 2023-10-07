let mois = prompt("Entrez un mois");
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
    console.log(`${mois} compte 28 jours.`);
    break;
  default:
    console.log("Saisi un mois valid");
}
