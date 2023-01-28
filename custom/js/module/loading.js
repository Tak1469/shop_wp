export function loading() {
  // ローディング画面
  $(window).on('load', function () {
    // 1.5秒後に発火
    $(this).delay(1500).queue(function () {
      // opacity 0にする
      $('#js-loading').addClass('is-loaded');
    });
  });

}
