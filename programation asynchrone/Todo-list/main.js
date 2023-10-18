const url = "https://jsonplaceholder.typicode.com/todo";

async function fetchTodos() {
  const res = await fetch(url);
  if (res.ok === true) {
    return res.json();
  }
  throw new Error("Impossible de contacter le serveur");
}

fetchTodos()
  .then((users) => {
    console.log(users);
    const container = document.getElementById("container");
    for (const user of users) {
      const tr = document.createElement("tr");
      tr.innerHTML += `
      <td>${user.userId}</td>
      <td>${user.id}</td>
      <td>${user.title}</td>
      <td>${user.completed}</td>
      `;

      container.appendChild(tr);
    }
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("erreur").innerHTML =
      "Impossible de contacter le serveur";
  });




  

// les api sonne des service et les endpoints nous permet d'accerder au service


  
/*
async function fetchTodos() {
  const container = document.getElementById("container");

  fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
    .then((res) => {
      return res.json();
    })

    .then((users) => {
      console.log(users);

      for (const user of users) {
        const tr = document.createElement("tr");
        tr.innerHTML += `
      <td>${user.userId}</td>
      <td>${user.id}</td>
      <td>${user.title}</td>
      <td>${user.completed}</td>
      `;

        container.appendChild(tr);
      }
    });
}
fetchTodos();
*/
