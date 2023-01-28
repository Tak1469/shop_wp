export function headerColor() {
  // スライドによるヘッダーの色付け
  const hederHight = 100;
  $(window).on('scroll', function () {
    if (hederHight < $(this).scrollTop()) {
      $('#js-nav-scroll').addClass('is-nav-bgColor');
    } else {
      $('#js-nav-scroll').removeClass('is-nav-bgColor');
    }
  });
}