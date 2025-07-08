import { HomeCharlas } from "../../components/features/Home/Charlas/Charlas.mjs";
import { HomeHeader } from "../../components/features/Home/Header/Header.mjs";

export const Home = ()=> {
    return `
        ${HomeHeader()}
        ${HomeCharlas()}
    `;
}