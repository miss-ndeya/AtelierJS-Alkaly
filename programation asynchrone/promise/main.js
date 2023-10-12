const avoirUnVelo = new Promise((Resolve, Reject) => {
  let moyenne = 5;
  if (moyenne < 10) {
    return Reject("Do am velo");
  }
  Resolve("Dina leu diox velo");
});

avoirUnVelo
  .then((mbaye) => {
    console.log(mbaye);
  })
  .catch((err) => {
    console.error( err);
  });

const avoirUnVeloFunc = (moyenne) => {
  return new Promise((Resolve, Reject) => {
    if (moyenne < 10) {
      return Reject(("la moyenne est insuffisant pour avoir un velo"));
    }
    Resolve("la moyenne est suffisant d'avoir un velo");
  });
};

avoirUnVeloFunc(39)
  .then((moyenne) => {
    console.log(moyenne);
  })
  .catch(err => {
    console.error(err);
});



  