const menu_space = document.querySelector("#menu_space");
const ham_menu = document.querySelector("#ham_menu");
const cerrar = document.querySelector("#cerrar");
const nav_space = document.querySelector("#nav_space");
const paw = document.querySelector("#paw");


ham_menu.addEventListener("click", () => {
    menu_space.classList.add("visible");
})

ham_menu.addEventListener("click", ()=>{
    ham_menu.classList.add("notVisible");
})

ham_menu.addEventListener("click", ()=>{
    paw.classList.add("notVisible");
})

cerrar.addEventListener("click", () => {
    menu_space.classList.remove("visible");
})

cerrar.addEventListener("click", () => {
    ham_menu.classList.remove("notVisible");
})

cerrar.addEventListener("click", () => {
    paw.classList.remove("notVisible");
})
