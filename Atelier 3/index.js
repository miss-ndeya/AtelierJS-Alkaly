// selection
 const container = document.querySelector('.click-event');
 const btn1 = document.querySelector('.btn-1');


 btn1.addEventListener("mouseover", () => {
    container.classList.add('border-radius');
})

// mouseout
btn1.addEventListener("mouseout", () => {
    container.classList.remove('border-radius');
})


























// click event
container.addEventListener("click", () => {
    container.classList.toggle('border-radius');
})

// ---------------------------------------------

// mouseover
container.addEventListener("mouseover", () => {
    // container.classList.add('border-radius');
})

// mouseenter
container.addEventListener("mouseenter", () => {
    container.classList.add('border-radius');
})

// mouseleave
container.addEventListener("mouseleave", () => {
    // container.classList.remove('border-radius');
})
// mouseout
container.addEventListener("mouseout", () => {
    container.classList.remove('border-radius');
})
