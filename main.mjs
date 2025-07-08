import { Navbar } from "./components/layout/Navbar/Navbar.mjs";
import { Footer } from "./components/layout/Footer/Footer.mjs";
import { handleRoute } from "./routes/handleRoute.mjs";

const navbar__container = document.querySelector(".navbar__container");
const footer__container = document.querySelector(".footer__container");

navbar__container.innerHTML = Navbar();
footer__container.innerHTML = Footer();

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", handleRoute);

// Detectar cada vez que cambia la ruta y renderizar
window.addEventListener("hashchange", handleRoute);