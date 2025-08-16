export const ErrorComponent = () => {
    return `
        <section class="error__page__container">
            <div class="error__content">
                <h1 class="error__title">Error <span>404</span></h1>
                <p class="error__message">
                    Este recurso perdió su conexión...  
                    <br>Podemos reemplazar partes del cuerpo, pero no podemos encontrar esta página.
                </p>
                <a href="/" class="error__btn">Volver al inicio</a>
            </div>
        </section>
    `;
}
