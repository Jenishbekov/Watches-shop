const swiper = new Swiper('.swiper-container', {
  
  loop: true,
  slidesPerView:4,
  // slideBetween:30,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  spaceBetween: 20,

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


  