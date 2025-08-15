export const VideosRender = (videos) => {
  const videoList = videos
    .map(
      (video) => `
        <li class="video__item">
          <a href="${video.link}" target="_blank" rel="noopener noreferrer">${video.name}</a>
        </li>
      `
    )
    .join("");

  return `
    <div class="project__videos__container">
      <h3>Videos relacionados</h3>
      <ul class="video__list">
        ${videoList.length > 0 ? videoList : "<p>No hay videos a mostrar por el momento</p>"}
      </ul>
    </div>
  `;
};
