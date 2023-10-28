const url = "https://jsonplaceholder.typicode.com/todos";
const notification = document.getElementById("notification");
const containercomplet = document.getElementById("containercomplet");
const retour = document.getElementById("retour");
let compteur = document.getElementById("compteur");
// let stokageLocal = JSON.parse(localStorage.getItem("todos")) || [];
let todoNonComplet;
let n = 0;

// window.onload = recharge();

// function recharge() {
//   if (stokageLocal.length) {
//     containercomplet.innerHTML = "";
//     todoNonComplet.forEach((todo) => {
//       const tr = document.createElement("tr");
//       tr.innerHTML += `
//               <td onClick="details(${todo.id})">${todo.title}</td>
//               <td>
//                <button class='btn-primary complete' onClick="completTodo(${
//                  todo.id
//                }, ${todo.completed})">${
//         todo.completed === true ? "completed" : "not completed"
//       }</button>
//               </td>
//           `;
//       containercomplet.appendChild(tr);
//     });
//   }
// }

async function getTodos() {
  try {
    retour.style.display = "none";
    notification.style.display = "block";
    const res = await fetch(url);
    const todos = await res.json();
    console.log(todos);
    const todoNOnComplets = todos.filter((todo) => todo.completed === false);
    todoNonComplet = todoNOnComplets;
    const todoComplet = todos.filter((todo) => todo.completed === true);
    afficheTodos(todoNonComplet);
    

    retour.addEventListener("click", () => {
      notification.style.display = "block";
      retour.style.display = "none";
      containercomplet.innerHTML = "";
   
    });

    notification.addEventListener("click", () => {
      retour.style.display = "block";
      notification.style.display = "none";
      containercomplet.innerHTML = "";
    //   recharge();
      compteur.innerHTML = 0
      n = 0
    });
    // localStorage.setItem("todos", JSON.stringify(todoNOnComplets));
  } catch (error) {
    console.error(error);
    document.getElementById("erreur").innerHTML =
      "Impossible de contacter le serveur";
  }
}
getTodos();

function afficheTodos(data) {
  data.forEach((todo) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `
              <td onClick="details(${todo.id})">${todo.title}</td>
              <td>
               <button class='btn-primary complete' onClick="completTodo(event)">${
      todo.completed === true ? "completed" : "not completed"
    }</button>
              </td>
          `;
    containercomplet.appendChild(tr);
  });
}
//

function completTodo(event) {
//   console.log(stokageLocal);
//   stokageLocal = stokageLocal.filter((elements) => elements.id !== id);
event.target.parentNode.parentNode.remove()
    const button = event.target.textContent
  if (button === "not completed") {
    n++
    compteur.innerHTML = n
    console.log(n);
    console.log(button);
} else{
    completed = "true"
    // console.log(completed);
  }
//   console.log(id);
//   console.log(stokageLocal);
//   containercomplet.innerHTML = "";
//   localStorage.setItem("todos", JSON.stringify(stokageLocal));
//   afficheTodos(stokageLocal);
}





