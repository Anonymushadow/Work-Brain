export const ProjectNavbar = (data) => {
  return `
    <div class="project__navbar">
      <ul class="project__navbar__content__container">
        ${
          data.links.map((link, i) => `
            <li class="project__navbar__content">
              <a href="${link}" class="project__navbar__content__link">
                ${data.names[i]}
              </a>
            </li>
          `).join("")
        }
      </ul>
    </div>
    <div class="project__content"></div>
  `;
};
