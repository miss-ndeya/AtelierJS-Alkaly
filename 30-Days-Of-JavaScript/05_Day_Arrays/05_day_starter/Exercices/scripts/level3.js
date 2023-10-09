// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// triez le tableau et trouvez l'âge minimum et maximum
ages.sort();
console.log("l'âge minimum est ", ages[0], "et l'âge maximum est", ages[9]);

// Trouvez l'âge médian (un élément du milieu ou deux éléments du milieu divisés par deux)
if (ages.length % 2 === 0) {
  const milieu1 = ages[ages.length / 2 - 1];
  const milieu2 = ages[ages.length / 2];
  console.log("l'âge médian est :", (milieu1 + milieu2) / 2);
} else {
  console.log("l'âge médian est :", ages[ages.length / 2]);
}


