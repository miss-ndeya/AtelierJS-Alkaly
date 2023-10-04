const mydiv = document.querySelector(".my-div");
const mybutton = document.querySelectorAll("button");

mybutton.forEach(function(button) {
    button.addEventListener("click", function() {
        let raduis = this.getAttribute("border-radius");
        mydiv.style.borderRaduis = raduis +"px";
        mydiv.classList.add("cercle");

        setInterval(() => {
            setInterval(function() {
                mydiv.classList.remove("cercle");
                mydiv.style.borderRaduis = "10px"
            }, 1500)
        },)
    })
})