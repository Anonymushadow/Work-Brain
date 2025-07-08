import { Imagenes } from "../../../../data/Imagenes.js";

export const HomeHeader = ()=> {
    return `
        <div class="home__header">
            <img class="home__header__img" src="${Imagenes.home.header}"/>
            <div class="home__header__presentation__container">
                <h1 class="home__header__presentation__title">Bienvenidos a</h1> 
                <h1 class="home__header__presentation__title">WORK@BRAIN</h1>
                <button class="home__header__presentation__button"><a href="#/about">Conocenos</a></button>
            </div>
        </div>
    `;
}