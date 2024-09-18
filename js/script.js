let menu = document.querySelector("#menu-icon");
let navContenedor = document.querySelector(".nav__contenedor");

/*Abrir el menu */
menu.addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navContenedor.classList.toggle('open');
})


/*Remuevo el menu al hacer scroll */
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navContenedor.classList.remove('open');
}