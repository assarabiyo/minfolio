document.querySelectorAll('.gnb a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(
      link.getAttribute('href')
    );

    if(target){
      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


var swiper = new Swiper(".mainwork-list", {
  slidesPerView: 3,
  spaceBetween: 20,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: -15,
    stretch: 0,
    scale: 0.8,
    depth: 30,
    modifier: 1,
    slideShadows: false,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
