const url = "data.json";
const notification = document.getElementById("notification");
const containercomplet = document.getElementById("containercomplet");
const retour = document.getElementById("retour");
const table = document.querySelector("table");

notification.addEventListener("click", () => {
  containercomplet.innerHTML = "";
  fetchTodos(true);
  notification.style.display = "none";
  retour.style.display = "block";
});

retour.addEventListener("click", () => {
  containercomplet.innerHTML = "";
  fetchTodos(false);
  notification.style.display = "block";
  retour.style.display = "none";
});

async function fetchTodos(completed) {
  try {
    const res = await fetch(url);
    const todos = await res.json();
    const todoNOnComplet = todos.filter((todo) => todo.completed === false);
    todos.forEach((todo) => {
      if (todo.completed === completed) {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td onClick="details(${todo.id})">${todo.title}</td>
                <td>
                    <button class='btn-primary complete'>${todo.completed=== true ? "completed" : "not completed"}</button>
                </td>
            `;
        containercomplet.appendChild(row);
      }
    });
  } catch (error) {
    document.getElementById("erreur").innerHTML =
      "Impossible de contacter le serveur";
  }
}

async function details(id) {
  try {
    const res = await fetch(url);
    const todos = await res.json();
    const todo = todos.find((todo) => todo.id === id);
    if (todo && todo.completed) {
      afficheDetail(todo);
    } else {
      console.error("La tâche n'est pas complétée");
      alert("La tâche n'est pas complétée");
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de la tâche :",
      error
    );
  }
}

function afficheDetail(todo) {
  table.innerHTML = `
        <thead>
            <tr class="border bg-primary">
                <th scope="col">userId</th>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">completed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${todo.userId}</td>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>
        </tbody>
    `;
}
fetchTodos(false);
