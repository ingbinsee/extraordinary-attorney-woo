const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

const wrapper = document.querySelector('.swiper-wrapper');
const images = document.querySelectorAll('.swiper-slide-img');
function handleScale(e) {
  const img = e.target.closest('img');
  if (!img) return;

  // const index = img.getAttribute('data-index');

  images.forEach((img) => img.classList.remove('is-active'));

  img.classList.add('is-active');
}

wrapper.addEventListener('click', handleScale);
