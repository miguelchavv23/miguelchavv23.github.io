// Avisa al CSS de que JavaScript funciona (activa las reglas del menú móvil)
document.documentElement.classList.add("js");
 
const boton = document.querySelector(".menu-boton");
const menu = document.querySelector("#menu-principal");
 
if (boton && menu) {
    // Abre o cierra el menú al pulsar el botón
    boton.addEventListener("click", () => {
        const abierto = menu.classList.toggle("abierto");
        boton.setAttribute("aria-expanded", abierto);
    });
 
    // Cierra el menú al elegir una opción
    menu.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("abierto");
            boton.setAttribute("aria-expanded", "false");
        });
    });
}
 
// Pone el año actual en el pie de página, para no tener que cambiarlo cada enero
const anio = document.querySelector("#anio");
if (anio) {
    anio.textContent = new Date().getFullYear();
}
 