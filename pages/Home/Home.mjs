import { HomeCarrousel } from "../../components/features/Home/Carrousel/Carrousel.mjs";
import { HomeHeader } from "../../components/features/Home/Header/Header.mjs";

export const Home = ()=> {
    return `
        ${HomeHeader()}
        ${HomeCarrousel()}
    `;
}