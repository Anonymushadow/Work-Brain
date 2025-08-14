import { PortfolioCards } from "/data/Portfolio.js";

export const PortfolioComponent = ()=> {

    const createCards = ()=> {
        return PortfolioCards.map(card => (
            `
                <div class="portfolio__project__card">
                    <div class="portfolio__project__card__img__container">
                        <img class="portfolio__project__card__img" src="${card.img}" />
                    </div>
                    <div class="portfolio__project__card__info__container">
                        <div class="portfolio__project__card__title__container">
                            <h3 class="portfolio__project__card__title">${card.name}</h3>
                        </div>
                        <div class="portfolio__project__card__button__container">
                            <button class="portfolio__project__card__button"><a class="portfolio__project__card__a" href="${card.link}" >Ver mas</a></button>
                        </div>
                    </div>
                </div>
            `
        )).join("");
    }

    return `
        <div class="portfolio__container">
            <div class="portfolio__title__container">
                <h2 class="portfolio__title">PROYECTOS</h2>
            </div>
            <div class="portfolio__projects__container">
                ${createCards()}
            </div>
        </div>
    `;
}