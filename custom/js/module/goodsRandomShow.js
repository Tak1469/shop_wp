export function goodsRandomShow() {
  // ランダム表示
  $(window).on('load', function () {
    // 表示要素を取得
    const goodsElements = $(".js-random-show");
    // 表示スピード
    const fadeSpeed = 500;
    // 発火を遅らせる
    const delaySpeed = 500;
    // スクロールで発火させる位置
    const $offSet = $(".js-offset");
    // スクロールで発火
    if ($offSet.hasClass("js-products")) {
      randomShow();
    } else {
      // スクロールで発火する条件
      $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();
        if ($offSet.length) {
          // スクロールの位置を指定
          let recommendOffset = $offSet.offset().top - 500;
          if (scroll > recommendOffset) {
            randomShow();
          }
        }
      });
    }
    function randomShow() {
      // ランダムで表示する要素の数
      let elmLength = goodsElements.length;
      // ランダムで表示する条件
      let randomMath = Math.floor(Math.random() * elmLength);
      // cssにてアニメーション指定
      $(goodsElements[randomMath]).css({ visibility: 'visible', opacity: '0' }).animate({ opacity: '1' }, fadeSpeed);
      // 0をのぞく
      goodsElements.splice(randomMath, 1);
      if (elmLength > 0) {
        // 一度だけ実行
        setTimeout(function () { randomShow() }, delaySpeed);
      } else {
        return false;
      }
    }
  });

}
