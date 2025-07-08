import { contactData, socialMedias } from "../../../data/ContactData.js";
import { Links } from "../../../data/Links.js";
import { Imagenes } from "../../../data/Imagenes.js";

export const Navbar = () => {
    const navItems = Links.map(link => `
        <li class="navbar__link"><a href="${link.href}" class="navbar__link__a">${link.name}</a></li>
    `).join("");

    const navItemsSocial = socialMedias.map(social => `
        <li><a href="${social.link}" target="_blank" class="navbar__social__item"><i class="${social.logo} navbar__social__item__icon"></i></a></li>
    `).join("");

    document.addEventListener("DOMContentLoaded", () => {
        const toggleBtn = document.getElementById("menu-toggle");
        const navbarLinksBar = document.querySelector(".navbar__links__bar");
        const links = document.querySelectorAll(".navbar__link__a");

        links.forEach(link => {
            link.addEventListener("click", ()=> {
                navbarLinksBar.classList.remove("navbar__links__bar__active");    
            })
        });
        toggleBtn.addEventListener("click", () => {
            navbarLinksBar.classList.toggle("navbar__links__bar__active");
        });

    });

    return `
        <header class="header">
            <div class="header__logo__container">
                <div class="header__logo__subcontainer">
                    <img class="header__logo" src="${Imagenes.navbar.logo}">
                </div>
                <h3 class="header__title">Work@Brain</h3>
            </div>
            <div class="header__data__container">
                <h4 class="header__data">${contactData.number} | ${contactData.mail} |</h4>
            </div>
        </header>
        <nav class="navbar">
            <div class="navbar__menu__btn__container">
                <button id="menu-toggle" class="navbar__menu__btn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="navbar__links__bar">
                <ul class="navbar__links__container">
                    ${navItems}
                </ul>
                <ul class="navbar__social__container">
                    ${navItemsSocial}
                </ul>
            </div>
        </nav>
    `;
}

