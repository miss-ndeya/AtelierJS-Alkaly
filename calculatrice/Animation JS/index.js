const mydiv = document.querySelector(".my-div");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");

// animation avec click
// animation button 1
btn1.addEventListener("click", () => {
    mydiv.classList.toggle("border-10");
    mydiv.classList.remove("border-15");
    mydiv.classList.remove("border-20");
    mydiv.classList.remove("border-25");
    mydiv.classList.remove("border-30");
})

// animation button 2
btn2.addEventListener("click", () => {
    mydiv.classList.toggle("border-15");
    mydiv.classList.remove("border-10");
    mydiv.classList.remove("border-20");
    mydiv.classList.remove("border-25");
    mydiv.classList.remove("border-30");
})

// animation button 3
btn3.addEventListener("click", () => {
    mydiv.classList.toggle("border-20");
    mydiv.classList.remove("border-15");
    mydiv.classList.remove("border-10");
    mydiv.classList.remove("border-25");
    mydiv.classList.remove("border-30");
})

// animation button 4
btn4.addEventListener("click", () => {
    mydiv.classList.toggle("border-25");
    mydiv.classList.remove("border-15");
    mydiv.classList.remove("border-20");
    mydiv.classList.remove("border-10");
    mydiv.classList.remove("border-30");
})

// animation button 1
btn5.addEventListener("click", () => {
    mydiv.classList.toggle("border-30");
    mydiv.classList.remove("border-15");
    mydiv.classList.remove("border-20");
    mydiv.classList.remove("border-25");
    mydiv.classList.remove("border-10");
})













/*
// animation avec mouse

// animation button 1
btn1.addEventListener("mouseenter", () => {
    mydiv.classList.add("border-10");
})
btn1.addEventListener("mouseout", () => {
    mydiv.classList.remove("border-10");
})

// animation button 2
btn2.addEventListener("mouseenter", () => {
    mydiv.classList.add("border-15");
})
btn2.addEventListener("mouseout", () => {
    mydiv.classList.remove("border-15");
})

// animation button 3
btn3.addEventListener("mouseenter", () => {
    mydiv.classList.add("border-20");
})
btn3.addEventListener("mouseout", () => {
    mydiv.classList.remove("border-20");
})

// animation button 4
btn4.addEventListener("mouseenter", () => {
    mydiv.classList.add("border-25");
})
btn4.addEventListener("mouseout", () => {
    mydiv.classList.remove("border-25");
})

// animation button 5
btn5.addEventListener("mouseenter", () => {
    mydiv.classList.add("border-30");
})
btn5.addEventListener("mouseout", () => {
    mydiv.classList.remove("border-30");
})
*/