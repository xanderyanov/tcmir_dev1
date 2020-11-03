$(function () {
  var swiper = new Swiper(".s2-container", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".ss2__right",
      prevEl: ".ss2__left",
    },
    pagination: {
      el: ".s2-pagination",
      clickable: true,
    },
    keyboard: true,
  });

  var swiper = new Swiper(".best2-container", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 177000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".best2__right",
      prevEl: ".best2__left",
    },
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1080: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });




  var swiper = new Swiper(".lookSlider-container", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 70000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".lookSlider__right",
      prevEl: ".lookSlider__left",
    },
    pagination: {
      el: ".lookSlider-pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
})