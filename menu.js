
const navToggle = document.querySelector(".nav-toggle")
const controls = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    controls.classList.toggle("nav-menu_visible");
})