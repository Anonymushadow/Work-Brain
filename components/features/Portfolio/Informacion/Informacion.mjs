export const InformationComponent = (contenido) => {
  let html = "";
  let isInList = false;

  for (let i = 0; i < contenido.length; i++) {
    const item = contenido[i];

    switch (item.type) {
      case "title":
        // Cerramos lista si estaba abierta
        if (isInList) {
          html += `</ul>`;
          isInList = false;
        }
        html += `<h1 class="info__section__title">${item.data}</h1>`;
        break;

      case "subtitle":
        // Cerramos lista si estaba abierta
        if (isInList) {
          html += `</ul>`;
          isInList = false;
        }
        html += `<h2 class="info__section__subtitle">${item.data}</h2>`;
        break;

      case "text":
        // Cerramos lista si estaba abierta
        if (isInList) {
          html += `</ul>`;
          isInList = false;
        }
        html += `<p class="info__section__text">${item.data}</p>`;
        break;

      case "item_title":
        const next = contenido[i + 1];
        if (next?.type === "item_text") {
          // Abrimos lista si no está abierta
          if (!isInList) {
            html += `<ul class="info__section__ul">`;
            isInList = true;
          }

          html += `
            <li class="info__section__item">
              <span class="info__section__label">${item.data}</span>: ${next.data}
            </li>`;

          i++; // saltamos item_text ya procesado
        }
        break;
    }
  }

  // Cerramos lista si quedó abierta al final
  if (isInList) {
    html += `</ul>`;
  }

  return `
    <section class="info__section">
      ${html}
    </section>
  `;
};
