let todos = [];
const url = "https://jsonplaceholder.typicode.com/todos";
const url1 = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then((res) => res.json())
  .then((newRes) => {
    todos = newRes;
    console.log({ todos });
  });

async function fetchAwait() {
  let res = await fetch(url1);
  try {
    res = await res.json();
    todos = res;
    console.log({ todos });

  } catch (error) {
    console.log(error);
  }
}
fetchAwait();



