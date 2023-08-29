// parent Node 
let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// acceder aux enfants 
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = 'red'

// parcourir l'elements parents
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
ul.firstElementChild.style.backgroundColor = 'blue'

// sibling 
const div = document.querySelector('div');
console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

