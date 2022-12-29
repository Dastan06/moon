let tog = document.getElementById("dark")
let body = document.querySelector("body")
let h = document.querySelector("h1")

let s = "Good morning!!!"
let m = "Good night!!!"
tog.addEventListener("click", function (){
    this.classList.toggle("bi-moon")
    if (this.classList.toggle("bi-brightness")) {
        body.style.backgroundColor = "rgb(85, 82, 82)"
        body.style.color="white"
        h.innerHTML = m
    } else {
        body.style.backgroundColor = "rgb(228, 228, 118)"
        body.style.color = "black"
        body.style.transition = "2s"
        h.innerHTML = s
    }
})