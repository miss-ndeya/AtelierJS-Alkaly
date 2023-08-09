// click event
const container = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

container.addEventListener("click", () => {
  container.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "red";
});

// -----------------------------------------------
// recuperation class mousemove
const mousemove = document.querySelector(".mousemove");

// mousemove est utiliser pour chak mouvement de la fenetre
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

//mousemove
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

//mouseup
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

// ecouteur d'evenement au survol de la souris
container.addEventListener("mouseenter", () => {
  container.style.background = "rgba(0, 0, 0, 0.6)";
});

container.addEventListener("mouseout", () => {
  container.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ------------------------------------------
// keypress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// inserer un audio en JS
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};
// ecouteur d'evenenement au clik d'un bouton de mon clavier
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "Enter") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  // appeler la foonction audio

  // ring("z");
});

// ------------------------------------------------
// scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 128) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ---------------------------------------------
// form events
const inputName = document.querySelector("input[type=text]");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3> Pseudo : ${pseudo}</h3>
    <h3> language prefere : ${language}</h3>
  `;
  } else {
    alert("Veuillez acceptez les CGV");
  }
});

// ------------------------------------------------
// load event
window.addEventListener("load", () => {
  console.log("Dcument Charger !");
});

// ------------------------------------------------
// forEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.7)";
  });
});

// ------------------------------------------------
// addEvenListener Vs onclick
// quand on utilise addEvenListener on peut accoler des evenement autant de fois qu'on veut alorsque avec onclick on ne peut pas
/*
document.body.onclick = function() {
  console.log("scroll");
};

document.body.onscroll = () => {
  console.log("click");
};
document.body.onscroll = () => {
  console.log("click !");
};
*/

// Bubbling => fin (de base leventListernner est parametre en mode bublbing)
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

// -----------------------------------------------
// stopPropagation
container.addEventListener("click", (e) => {
  // alert("text !");
  e.stopPropagation();
});

// ---------------------------------------------
// BOM browser Object Model
// console.log(window.innerHeight);
// console.log(window.screenY);
// window.open("http://google.con", "cour js, height=600p, width=800");
// evenement adosses a window
// windown.alert("hello");
// window close ()

// le confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous trompez ?");
});

// let answer;
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  container.innerHTML = "<h3>Bravo " + answer + "</h3>";
});

// setTimeout(() => {
//   container.style.borderRaduis = "300px";
// }, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'> 
//       <h2>Nouvelle Boite !</h2>
//   `
// }, 1800)
// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// })

// location 
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http:lequipe.fr")

// window.onload = () => {
//   location.href = "http://twiter.fr";

// };
// navigateur
// console.log(navigator.userAgent);

// j'ai op de connexion cause pour la quelle j'ai pas fais la geolocation

// history
// revenir en arriere
// window.history.back();
// history go (-2)

// ----------------------------------------
// set property
window.addEventListener("mousemove", (e) => {
  console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerX + "px");
})
