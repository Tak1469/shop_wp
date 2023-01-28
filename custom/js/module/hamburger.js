export function hamburger() {
  // ハンバーガーメニー
  $(window).on('load', function () {
    $("#is-toggle-sp-menu").on('click', function () {
      $('.is-line-change').toggleClass('line-active');
      $('.is-res-menu').toggleClass('res-active');
      $('.is-link-jump').on('click', function () {
        $('.is-line-change').removeClass('line-active');
        $('.is-res-menu').removeClass('res-active');
      });
    });
  });
}