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





/*async function getTodos() {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
      const response = await fetch(apiUrl);
      const data = await response.json();
      const todoList = document.getElementById('todoList');
      const completedTodoList = document.getElementById('completedTodoList');
      const btnNodif = document.querySelector('.notifs')
      const completedTodos = []; // Tableau pour stocker les tâches terminées
      const nbrTodoCompleted = document.querySelector('.nbrTodoCompleted')

      //   console.log(btnNodif);
      btnNodif.addEventListener('click', ()=>{
        const tacheTermine = document.querySelector('.tacheTermine')
        tacheTermine.classList.toggle('showTacheTerminer')
        // console.log(tacheTermine);
      })
  
      data.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        listItem.addEventListener('click', () => {
          // Afficher les détails du todo lorsque vous cliquez sur le todo
          displayTodoDetails(todo,listItem);
          });
  
        const finishButton = document.createElement('button');
        finishButton.textContent = 'Terminer';
  
        finishButton.addEventListener('click', () => {
          listItem.remove();
          todoList.insertBefore(listItem, todoList.firstChild);
          if (finishButton.textContent === 'Terminer') {
            completedTodos.push(todo); // Ajouter au tableau des tâches terminées
            finishButton.textContent = 'Non Terminer';
          } else {
            // Retirer du tableau des tâches terminées
            const index = completedTodos.findIndex(item => item.id === todo.id);
            if (index > -1) {
              completedTodos.splice(index, 1);
            }
            finishButton.textContent = 'Terminer';
          }
          // Déplacer le todo vers la section "Todos terminés"
          completedTodoList.appendChild(listItem);
          finishButton.textContent = 'Non Terminer';
          finishButton.addEventListener('click',()=>{
            listItem.remove()
            todoList.appendChild(listItem);
            finishButton.textContent = 'Terminer';
          })
          nbrTodoCompleted.textContent = completedTodos.length

        });
  
        listItem.appendChild(finishButton);
  
        if (!todo.completed) {
          todoList.appendChild(listItem);
        }
      });

      function displayTodoDetails(todo, listItem) {
        // Créer une bulle flottante pour les détails du todo
        const detailsBubble = document.createElement('div');
        detailsBubble.className = 'todo-details-bubble';
        detailsBubble.innerHTML = `
          <h3>Détails du Todo</h3>
          <p>ID: ${todo.id}</p>
          <p>Title: ${todo.title}</p>
          <p>Completed: ${todo.completed ? 'Oui' : 'Non'}</p>
        `;
  
        // Positionner la bulle flottante en fonction du todo cliqué
        const listItemRect = listItem.getBoundingClientRect();
        detailsBubble.style.top = (listItemRect.bottom + window.scrollY) + 'px';
        detailsBubble.style.left = (listItemRect.left + window.scrollX) + 'px';
  
        // Ajouter la bulle flottante à la page
        document.body.appendChild(detailsBubble);
  
        // Gérer la fermeture de la bulle flottante en cliquant en dehors
        document.body.addEventListener('click', (e) => {
          if (e.target !== listItem && e.target !== detailsBubble) {
            detailsBubble.remove();
          }
        });
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des todos : ', error);
    }
  }
  
  getTodos(); */
