const ham = document.getElementById("hamburger");
const nav = document.getElementById("navbar-links");
const body = 

ham.addEventListener("click", ()=>{
    nav.classList.toggle("display");
    document.body.classList.toggle("scrollLock");
})