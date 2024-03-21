import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const slidersContainer = document.querySelectorAll(".slider-container");

if (slidersContainer.length > 0) {
  slidersContainer.forEach((container) => {
    const slider = container.querySelector(".slider");
    const nextButton = container.querySelector(".swiper-button-next");
    const prevButton = container.querySelector(".swiper-button-prev");
    const swiperPagination = container.querySelector(".swiper-pagination");

    if (slider && nextButton && prevButton) {
      let swiper = new Swiper(slider, {
        slidesPerView: 1.1,
        loop: true,
        spaceBetween: 12,
        centeredSlides: true,
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
        breakpoints: {
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          }
        },
        pagination: {
          el: swiperPagination,
          clickable: true,
        },
      });
    }
  });
}

const images = document.querySelectorAll(".slider-fade__img");
if (images.length > 1) {
  const imgLength = images.length;
  let currentIndex = 0;

  const slider = setInterval(() => {
    images.forEach((img, index) => {
      if (index === currentIndex) {
        img.style.opacity = 1;
      } else {
        img.style.opacity = 0;
      }
    });

    currentIndex = (currentIndex + 1) % imgLength;

  }, 5000);
}






