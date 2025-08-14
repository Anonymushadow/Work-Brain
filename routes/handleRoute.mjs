import { Home } from "/pages/Home/Home.mjs";
import { About } from "/pages/About/About.mjs";
import { Contacts } from "/pages/Contacts/Contacts.mjs";
import { iniciarContacto } from "/components/features/Contacts/Contacts.mjs";
import { Portfolio } from "/pages/Portfolio/Portfolio/Portfolio.mjs";
import { ProjectNavbar } from "/components/features/Portfolio/ProjectNavbar/ProjectNavbar.mjs"
import { navLinks, InformationData } from "/data/Portfolio.js";
import { VideosRender } from "/components/features/Portfolio/Videos/Videos.mjs";
import { videoSources } from "/data/videos.mjs";
import { iniciarCarrousel } from "/components/features/Home/HomeCarrouselController/HomeCarrouselController.mjs";
import { InformationComponent } from "/components/features/Portfolio/Informacion/Informacion.mjs";


export const handleRoute = () => {
    let route = window.location.hash;
    const main = document.querySelector(".content__container");
    if (route === "") route = "#/";
    let container = undefined;

    const parts = route.slice(2).split("/"); // Ej: ["portfolio", "protesis", "videos"]
    const [mainRoute, subRoute, subSubRoute] = parts;

    switch (mainRoute) {
        case "":
            main.innerHTML = Home();
            requestAnimationFrame(() => iniciarCarrousel());
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
                    main.innerHTML = Portfolio(); // Vista principal del portfolio
                    break;
                case "protesis":
                    main.innerHTML = Portfolio(); // Pintás primero la vista base

                    // Esperás a que se renderice para acceder al container
                    setTimeout(() => {
                        const container = document.querySelector(".portfolio__container");
                        if (!container) return;

                        container.classList.add("delete__padding");

                        // Insertás el navbar
                        container.innerHTML = ProjectNavbar(navLinks.protesis);

                        // Obtener el subcontenedor
                        const subcontainer = document.querySelector(".project__content");
                        if (!subcontainer) return;

                        // Insertás el contenido según subSubRoute
                        switch (subSubRoute) {
                            case undefined:
                                if (window.location.hash !== "#/portfolio/protesis/informacion") {
                                    window.location.hash = "#/portfolio/protesis/informacion";
                                    return;
                                }
                                handleRoute(); // Redirigís para que se pinte correctamente
                                return;
                            
                            // #/PORTFOLIO/PROTESIS/INFORMACION 
                            case "informacion":
                                subcontainer.innerHTML += InformationComponent(InformationData.protesis);
                                break;
                                
                            // #/PORTFOLIO/PROTESIS/VIDEOS
                            case "videos":
                                subcontainer.innerHTML += VideosRender(videoSources.protesis);
                                break;

                            default:
                                window.location.hash = "#/portfolio/protesis/informacion";
                                handleRoute();
                                return;
                        }
                    }, 0); // Esperás a que `main.innerHTML = Portfolio()` termine
                    break;
                case "programacion":
                    main.innerHTML = Portfolio();
                    setTimeout(() => {
                        const container = document.querySelector(".portfolio__container");
                        if (!container) return;

                        container.classList.add("delete__padding");
                        container.innerHTML = ProjectNavbar(navLinks.programacion);

                        const subcontainer = document.querySelector(".project__content");
                        if (!container) return;

                        switch (subSubRoute) {
                            case undefined:
                                if (window.location.hash !== "#/portfolio/programacion/informacion") {
                                    window.location.hash = "#/portfolio/programacion/informacion";
                                    return;
                                }
                                handleRoute();
                                return;
                            case "informacion":
                                subcontainer.innerHTML += InformationComponent(InformationData.programacion);
                                break;
                            case "videos":
                                subcontainer.innerHTML += VideosRender(videoSources.programacion);
                                break;
                            default:
                                window.location.hash = "#/portfolio/programacion/informacion";
                                handleRoute();
                                return;
                        }
                    }, 0);
                    break;
                case "componentes":
                    main.innerHTML = Portfolio();
                    setTimeout(() => {
                        const container = document.querySelector(".portfolio__container");
                        if (!container) return;

                        container.classList.add("delete__padding");
                        container.innerHTML = ProjectNavbar(navLinks.componentes);

                        const subcontainer = document.querySelector(".project__content");
                        if (!container) return;

                        switch (subSubRoute) {
                            case undefined:
                                if (window.location.hash !== "#/portfolio/componentes/informacion") {
                                    window.location.hash = "#/portfolio/componentes/informacion";
                                    return;
                                }
                                handleRoute();
                                return;
                            case "informacion":
                                subcontainer.innerHTML += InformationComponent(InformationData.componentes);
                                break;
                            case "videos":
                                subcontainer.innerHTML += VideosRender(videoSources.componentes);
                                break;
                            default:
                                window.location.hash = "#/portfolio/componentes/informacion";
                                handleRoute();
                                return;
                        }
                    }, 0);
                    break;
                case "impresiones":
                    main.innerHTML = Portfolio();
                    setTimeout(() => {
                        const container = document.querySelector(".portfolio__container");
                        if (!container) return;

                        container.classList.add("delete__padding");
                        container.innerHTML = ProjectNavbar(navLinks.impresiones);

                        const subcontainer = document.querySelector(".project__content");
                        if (!container) return;

                        switch (subSubRoute) {
                            case undefined:
                                if (window.location.hash !== "#/portfolio/impresiones/informacion") {
                                    window.location.hash = "#/portfolio/impresiones/informacion";
                                    return;
                                }
                                handleRoute();
                                return;
                            case "informacion":
                                subcontainer.innerHTML += InformationComponent(InformationData.impresion3d);
                                break;
                            case "videos":
                                subcontainer.innerHTML += VideosRender(videoSources.impresiones);
                                break;
                            default:
                                window.location.hash = "#/portfolio/impresiones/informacion";
                                handleRoute();
                                return;
                        }
                    }, 0);
                    break;
                case "videos":
                    main.innerHTML = Portfolio();
                    setTimeout(() => {
                        const container = document.querySelector(".portfolio__container");
                        if (!container) return;

                        container.classList.add("delete__padding");
                        container.innerHTML = ProjectNavbar(navLinks.videos);

                        const subcontainer = document.querySelector(".project__content");
                        if (!container) return;

                        switch (subSubRoute) {
                            case undefined:
                                if (window.location.hash !== "#/portfolio/videos/informacion") {
                                    window.location.hash = "#/portfolio/videos/informacion";
                                    return;
                                }
                                handleRoute();
                                return;
                            case "informacion":
                                subcontainer.innerHTML += InformationComponent(InformationData.videos);
                                break;
                            case "videos":
                                subcontainer.innerHTML += VideosRender(videoSources.videos);
                                break;
                            default:
                                window.location.hash = "#/portfolio/videos/informacion";
                                handleRoute();
                                return;
                        }
                    }, 0);
                    break;
                case "prototipos":
                    main.innerHTML = Portfolio();
                    setTimeout(() => {
                        const container = document.querySelector(".portfolio__container");
                        if (!container) return;

                        container.classList.add("delete__padding");
                        container.innerHTML = ProjectNavbar(navLinks.prototipos);

                        const subcontainer = document.querySelector(".project__content");
                        if (!container) return;

                        switch (subSubRoute) {
                            case undefined:
                                if (window.location.hash !== "#/portfolio/prototipos/informacion") {
                                    window.location.hash = "#/portfolio/prototipos/informacion";
                                    return;
                                }
                                handleRoute();
                                return;
                            case "informacion":
                                subcontainer.innerHTML += InformationComponent(InformationData.prototipos);
                                break;
                            case "videos":
                                subcontainer.innerHTML += VideosRender(videoSources.prototipos);
                                break;
                            default:
                                window.location.hash = "#/portfolio/prototipos/informacion";
                                handleRoute();
                                return;
                        }
                    }, 0);
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
