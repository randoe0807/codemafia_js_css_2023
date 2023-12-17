document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const ta = new TextAnimation(entry.target);
            ta.animate();
            observer.unobserve(entry.target);
        } else {
            
        }
    })
}
const options = {
    // rootとは、交差を監視する領域を指定する、あまり使わない
    root: null, //null:ブラウザの表示領域
    // rootMargiとは、交差を監視する領域を拡大、縮小する
    rootMargin: "0px", //pxの単位は不要
    // thresholdとは、交差の割合を指定する
    threshold: 0 //0:画面の上端、1:画面の下端
}
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));

});




