import { QuienesSomos } from "../../components/features/About/QuienesSomos/QuienesSomos.mjs";
import { Team } from "../../components/features/About/Team/Team.mjs";

export const About = ()=> {
    return `
        ${QuienesSomos()}
        ${Team()}
    `;
}