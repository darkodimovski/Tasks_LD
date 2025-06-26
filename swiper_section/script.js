class CustomSwiperController {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.swiperInstance = null;
  }

  init() {
    if (!this.swiperInstance) {
      this.swiperInstance = new Swiper(this.container, {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 3,
          }
        },
        on: {
          slideChange: () => {
            console.log('Active slide index:', this.swiperInstance.activeIndex);
          }
        }
      });
      console.log('Swiper initialized.');
    }
  }

  destroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
      console.log('Swiper destroyed.');
    }
  }

  toggle() {
    this.swiperInstance ? this.destroy() : this.init();
  }
}

const swiperController = new CustomSwiperController('.swiper');
swiperController.init();

document.querySelector('.toggle-swiper').addEventListener('click', () => {
  swiperController.toggle();
});
