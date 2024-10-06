const header = document.querySelector("header");

//Evento que al bajar el scroll en el Eje Y, muestra de forma diferente el header, agregandole la clase sticky.
window.addEventListener("scroll", ()=>{
    header.classList.toggle('sticky', this.window.scrollY > 80);
})

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