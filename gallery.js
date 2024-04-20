<script>
var mySwiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
</script>
