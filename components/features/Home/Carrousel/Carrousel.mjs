import { Imagenes } from "/data/Imagenes.js";

export const HomeCarrousel = ()=> {
    return `
        <div class="home__carrousel__content__container">
            <div class="home__carrousel__container">
                <button class="home__carrousel__nav prev">&lt;</button>
                <div class="home__carrousel">
                    ${Imagenes.home.carrousel.map(img => `<img src="${img.src}" alt="${img.alt || 'Imagen'}">`).join('')}
                </div>
                <button class="home__carrousel__nav next">&gt;</button>
            </div>

            <div id="modal" class="home__carrousel__modal hidden">
                <span class="home__carrousel__modal__close">&times;</span>
                <img id="modal-img" src="" alt="Grande">
            </div>
        </div>
    `;
}