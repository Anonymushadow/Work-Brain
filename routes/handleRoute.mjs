import { Home } from "/pages/Home/Home.mjs";
import { About } from "/pages/About/About.mjs";
import { Contacts } from "/pages/Contacts/Contacts.mjs";
import { iniciarContacto } from "/components/features/Contacts/Contacts.mjs";
import { Portfolio } from "/pages/Portfolio/Portfolio/Portfolio.mjs";

export const handleRoute = () => {
    let route = window.location.hash; // por ejemplo "#/portfolio/proyectos"
    const main = document.querySelector(".content__container");
    if (route === "") route = "#/";

    const parts = route.slice(2).split("/"); // ["portfolio", "proyectos"]
    const [mainRoute, subRoute] = parts;

    switch (mainRoute) {
        case "":
            main.innerHTML = Home();
            break;
        case "about":
            main.innerHTML = About();
            break;
        case "contact":
            main.innerHTML = Contacts();
            iniciarContacto();
            break;
        case "portfolio":
            switch (subRoute) {
                case undefined:
                    main.innerHTML = Portfolio(); // vista principal del portfolio
                    break;
                case "protesis":
                    main.innerHTML = "Protesis";
                    break;
                case "programacion":
                    main.innerHTML = "Programacion";
                    break;
                default:
                    main.innerHTML = "<h1>404: Subruta de portfolio no encontrada</h1>";
                    break;
            }
            break;
        default:
            main.innerHTML = "<h1>404: Página no encontrada</h1>";
            break;
    }
}
