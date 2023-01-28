export function heroSlider() {
  $(window).on('load', function () {
    sliderStart();
  });

  function sliderStart() {
    // スライド画像要素取得
    const slideItem = $('.js-slide-item');
    // スライド個数要素取得
    const totalNum = slideItem.length - 1;
    // fadeinの秒数
    const fadeTime = 2000;
    // 切り替わる秒数
    const IntervalTime = 5000;
    // 各スライドを感知するための要素を用意
    let actNum = 0;
    // 現在の何番目のスライドか
    let nowSlide = '';
    // 次のスライド
    let nextSlide = '';

    function slideSwitchOver() {
      nowSlide.removeClass('show');
      nextSlide.addClass('show zoom').delay(fadeTime).queue(
        // zoomだけ遅れて止める
        function () {
          nowSlide.removeClass('zoom').dequeue();
        });
    }
    // スライドfadeIn 
    slideItem.eq(0).addClass('show zoom');
    setInterval(() => {
      if (actNum < totalNum) {
        // スライド切り替え
        nowSlide = slideItem.eq(actNum);
        nextSlide = slideItem.eq(++actNum);
        slideSwitchOver();
      } else {
        // スライド切り替え
        nowSlide = slideItem.eq(actNum);
        nextSlide = slideItem.eq(actNum = 0);
        slideSwitchOver();
      }
    }, IntervalTime);
  }
}