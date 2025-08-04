import { TeamData} from "../../../../data/Team.js";
import { Imagenes } from "../../../../data/Imagenes.js";

export const Team = ()=> {
    const createTeamCard = () => {
        return TeamData.map(member => (
        `
                <div class="about__team__card">
                    <div class="about__team__card__image__container">
                        <img class="about__team__card__image" src="${Imagenes.about[member.img] || "/public/images/About/default_image.jpg"}"/>
                    </div>
                    <div class="about__team__card__data__container">
                        <h4 class="about__team__card__data__title">${member.name}</h4>
                        <h5 class="about__team__card__data__rol">${member.rol}</h5>
                        <p class="about__team__card__data__description">${member.description}</p>
                    </div>
                </div>
        `
        )).join("");
    }


    return `
        <div class="about__team__container">
            <div class="about__team__title__container">
                <h2>Nuestro equipo</h2>
            </div>
            <div class="about__team__cards__container">
                ${createTeamCard()}
            </div>
        </div>
    `;
}