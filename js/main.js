
$('a[href^="#"]').on('click', function(e) {
  let link = $(this).attr('href'),
      el = $(document).find(link);
  if(el.length > 0) {
    el = el.eq(0).offset().top;
    $('html, body').animate({
      scrollTop: el+'px'
    }, 500, 'linear');
  }
  return false;
});

const swiper = new Swiper('.swiper-container', {
  loop: true,
  loopedSlides: '1',
  slidesPerView: 1,
  autoplay: {
      delay: 5000,
  },
  // pagination: {
  //     el: '.swiper-pagination',
  //     type: 'fraction',
  //     renderFraction: function (currentClass, totalClass) {
  //         return '<div class="pagination">' +
  //             '<span class="' + currentClass + '"></span>' +
  //             '<img src="../img/line.svg">' +
  //             '<span class="' + totalClass + '"></span>' + '</div>';
  //     }
  // },
  navigation: {
      nextEl: '.right',
      prevEl: '.left',
  },


});