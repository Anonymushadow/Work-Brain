import { Imagenes } from "../../../../data/Imagenes.js";

export const HomeCharlas = ()=> {
    return `
        <div class="home__charlas__container">
            <div class="home__charlas">
                <div class="home__charlas__img__Container">
                    <img class="home__charlas__img" src="${Imagenes.home.firmas}"/>
                </div>
                <div class="home__charlas__content__Container">
                    <h2 class="home__charlas__title">Charlas en vivo e invitados.</h2>
                    <button class="home__charlas__button"><a href="#/contact">Ver mas</a></button>
                </div>
            </div>
        </div>
    `;
}