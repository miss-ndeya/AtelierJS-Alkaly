// Dom Manipulation

// stylisation element Html avec DOM
const title = document.getElementById("titre");
title.style.color = "red";

const listeItems = document.querySelectorAll(".list-items");
for (i = 0; i < listeItems.length; i++) {
  // listeItems[i].style.fontSize = '2rem'
}

// creation elements html avec le dom
const ul = document.querySelector("ul");
const li = document.createElement("li");
const textLi = document.createTextNode("new list");
li.append(textLi);
ul.append(li);

// modification text
li.innerText = "X-men";

// modification Atributes et Classes
li.setAttribute("id", "titre");

// Supprimer Attribute
li.removeAttribute("id");

// recuperation ou selectionner l'attribut
console.log(title.getAttribute("id"));

// ajout class
li.classList.add("list-items");

// supprimer class
li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));

// supprimer un element
li.remove();

// Explication sur la difference entre les inners
const firsListItems = document.querySelector('.list-items');
console.log(firsListItems.innerText);
console.log(firsListItems.innerContent);
console.log(firsListItems.innerHTML);

// getElementById()
// const title = document.getElementById("titre");
console.log(title);

// getElemenByClassName
const listItems = document.getElementsByClassName('.list-items')
console.log(listItems);

// getElementByTagName
const listItem = document.getElementByTagName("li");
console.log(listItem);

// querySelector
const container =document.querySelector('div');
console.log(container);

// querySelectorAll
const containers =document.querySelectorAll('div');
console.log(containers);