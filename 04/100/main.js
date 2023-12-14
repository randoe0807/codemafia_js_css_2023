// const dcl = document.querySelector('.dcl');
// const load = document.querySelector('.load');

// document.addEventListener("DOMContentLoaded", function () {
//     dcl.classList.add('done');
// });

// window.addEventListener("load", function () {
//     load.classList.add('done');
// });

const h1 = document.querySelector('h1');
h1.style.color = 'red';

// DOMContentLoadedとloadの違い
// DOMContentLoadedはDOMツリーが構築されたら発火する
// loadはページの読み込みが完了したら発火する
// 読み込みが速いのはDOMContentLoaded