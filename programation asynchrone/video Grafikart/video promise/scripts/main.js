const p = new Promise((resolve, reject) => {
  reject(4);
});

function waitSync(duration) {
  const t = Date.now();
  while (Date.now - t < duration) {}
}

p.then((n) => {
  console.log("le nombre", n);
  return 2;
})
  .then((n) => console.log(2 * n))
  .catch((e) => {
    console.log("Erreur", e);
    return 2;
  })
  .then((n) => console.log(2))
  .finally(() =>
    console.log("quelque chose qui  va etre executer quoi qu'il arrive")
  );

//   Autre methode
function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

function waitAndFail(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
}

wait(2000)
  .then(() => {
    console.log("Attente 2s");
    return waitAndFail(1000);
  })
  .catch(() => null);

//Autre methode
async function main() {
  try {
    await waitAndFail(2000);
    console.log("Bonjour");
    await wait(1000);
    console.log("Hello");
  } catch (error) {
    console.log("Error");
  }
}
main();

async function mains() {
  const duration = await wait(2000);
  console.log(`Duration: ${duration}`);
  return 5;
}
mains().then((n) => console.log(n));

// combinaison des promesses
Promise.all([waitAndFail(1000), wait(2000)])
  .then(console.log)
  .catch(console.log);

// allSettled retour un tableau d'objet
// et ignore les promesses qui vont echouer
Promise.allSettled([waitAndFail(1000), wait(2000)])
  .then(console.log)
  .catch(console.log);

// any revoie le premier resultat qui est reussi
Promise.any([wait(1000), waitAndFail(2000)])
  .then(console.log)
  .catch(console.error);

// si une promesse echoue il va
// considerer que la promesse est echec
Promise.race([waitAndFail(1000), waitAndFail(2000)])
  .then(console.log)
  .catch(console.error);

const div = new Promise((r) => {
  console.log("Hello");
  r(2);
});
waitSync(2000);
console.log("les gens");
