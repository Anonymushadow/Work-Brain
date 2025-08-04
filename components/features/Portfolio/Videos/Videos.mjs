/*
const videos = [
  { name: "Video 1", link: "https://example.com/video1" },
  { name: "Video 2", link: "https://example.com/video2" },
  { name: "Video 3", link: "https://example.com/video3" },
];

*/

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
        ${videoList}
      </ul>
    </div>
  `;
};
