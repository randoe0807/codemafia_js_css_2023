// .swiperクラスを持つ要素を取得し、インスタンスを生成
const swiper = new Swiper(".swiper", {
  // Optional parameters
//   direction: "vertical",
//   loop: true,
	effect: "coverflow",

  // If we need pagination
  pagination: {
    // ページネーションの要素を指定
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    // 次のスライドへのbtn要素を指定
    nextEl: ".swiper-button-next",
    // 前のスライドへのbtn要素を指定
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    // スクロールバーの要素を指定
    el: ".swiper-scrollbar",
  },
});
