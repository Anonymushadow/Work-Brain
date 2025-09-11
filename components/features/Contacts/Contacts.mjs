import { contactData } from "/data/ContactData.js";
import { Imagenes } from "../../../../data/Imagenes.js";

export const iniciarContacto = () => {
        const nameInput = document.querySelector(".contacts__form__name");
        const mailInput = document.querySelector(".contacts__form__mail");
        const msgInput = document.querySelector(".contacts__form__message");
        const button = document.querySelector(".contacts__form__button");

        if (button) {
            button.addEventListener("click", () => {
                const name = nameInput.value.trim();
                const mail = mailInput.value.trim();
                const msg = msgInput.value.trim();

                if (name === "" || mail === "" || msg === "") {
                    alert("Todos los campos del formulario deben estar completos");
                    return;
                }

                const completeMSG = `Nombre: ${name}\nE-Mail: ${mail}\nMensaje: ${msg}`;
                const encodedMSG = encodeURIComponent(completeMSG);

                window.open(`https://wa.me/${contactData.number}?text=${encodedMSG}`, "_blank");
            });
        }
    };

export const ContactComponente = () => {
    return `
        <div class="contacts__container">
            <div class="contacts__box">
                <div class="contacts__form">
                    <div class="contacts__form__title__container">
                        <h1 class="contacts__form__title">Contactanos</h1>
                    </div>
                    <div class="contacts__form__data">
                        <input type="text" class="contacts__form__name" placeholder="Nombre" />
                        <input type="email" class="contacts__form__mail" placeholder="E-Mail" />
                        <textarea class="contacts__form__message" placeholder="Mensaje"></textarea>
                    </div>
                    <div class="contacts__form__button__container">
                        <button class="contacts__form__button">Enviar Mensaje</button>
                    </div>    
                </div>
                <div class="contacts__image__container">
                    <img class="contacts__image" src="${Imagenes.contacts.background}" />
                </div>
            </div>
        </div>
    `;
};
