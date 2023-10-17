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
fetchTodos()
