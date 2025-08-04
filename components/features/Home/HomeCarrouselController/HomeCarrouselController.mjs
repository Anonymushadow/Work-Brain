export function iniciarCarrousel() {
  const carousel = document.querySelector('.home__carrousel');
  const prevBtn = document.querySelector('.home__carrousel__nav.prev');
  const nextBtn = document.querySelector('.home__carrousel__nav.next');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.home__carrousel__modal__close');

  carousel.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    console.log("Click en img: ", e.target.src);
    modalImg.src = e.target.src;
    modal.classList.remove('hidden');
  }
});

  let baseImages = Array.from(carousel.querySelectorAll('img'));
  let visibleCount = 1;

  const updateVisibleCount = () => {
    const imgWidth = baseImages[0].getBoundingClientRect().width;
    visibleCount = Math.floor(carousel.offsetWidth / imgWidth);
  };

  updateVisibleCount();

  // Clonar las imágenes necesarias
  const clonesBefore = baseImages.slice(-visibleCount).map(img => img.cloneNode(true));
  const clonesAfter = baseImages.slice(0, visibleCount).map(img => img.cloneNode(true));

  clonesBefore.forEach(clone => carousel.prepend(clone));
  clonesAfter.forEach(clone => carousel.append(clone));

  let allImages = Array.from(carousel.querySelectorAll('img'));
  let index = visibleCount;

  const getImgWidth = () => allImages[0].getBoundingClientRect().width + 16;

  function updateCarousel(noTransition = false) {
    const imgWidth = getImgWidth();
    if (noTransition) carousel.style.transition = "none";
    else carousel.style.transition = "transform 0.4s ease";
    carousel.style.transform = `translateX(-${index * imgWidth}px)`;
  }

  updateCarousel();

  nextBtn?.addEventListener('click', () => {
    if (index < allImages.length - visibleCount) {
      index++;
      updateCarousel();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  carousel.addEventListener('transitionend', () => {
    if (index >= allImages.length - visibleCount) {
      index = visibleCount;
      updateCarousel(true);
    }
    if (index < visibleCount) {
      index = allImages.length - visibleCount * 2;
      updateCarousel(true);
    }
  });

  // Delegación de eventos (funciona para clones también)
  carousel.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      modalImg.src = e.target.src;
      modal.classList.remove('hidden');
    }
  });

  closeModal?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  window.addEventListener('resize', () => {
    updateVisibleCount();
    updateCarousel(true);
  });
}
