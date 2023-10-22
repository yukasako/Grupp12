const ham = document.getElementById("hamburger");
const nav = document.getElementById("navbar-links");

ham.addEventListener("click", ()=>{
    nav.classList.toggle("display");
})