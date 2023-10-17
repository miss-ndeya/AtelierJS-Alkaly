async function fetchUsers() {
    const r = await fetch('https://jsonplaceholder.typicode.com/users')
    if (r.ok === true) {
        return r.json()
    }
    throw new Error('Imposssible de contacter le serveur')
}
fetchUsers().then(users => console.log(users))



/*
const img = document.getElementById("img");

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    if (res.ok) {
      res.json().then(data => {
        img.src = data[0].url
      })
    } else {
        document.getElementById("erreur").innerHTML = "Erreur :("
    }
  })
  */
