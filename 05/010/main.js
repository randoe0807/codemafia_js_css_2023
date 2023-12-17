const child = document.querySelector('.child');
const cb = function(entries, observer){
    // alert('intersecting');
    // observeには複数の要素を渡すことができるので、entriesには配列が入っている
    // forEach:配列の中身を一つずつ取り出す
    entries.forEach(entry => {
        console.log('7行目のentry');
        console.log(entry.target);
        if(entry.isIntersecting){
            console.log('inview');
            // entry.target:監視している要素
            entry.target.classList.add('inview');
            //unobserve:監視をやめる。画面に表示されたら、監視をやめる
            // observer.unobserve(entry.target);
        } else {
            console.log('out view');
            entry.target.classList.remove('inview');
        }
    })
}
// IntersectionObserver:第一引数にコールバック関数、第二引数にオプションを渡す
const options = {
    // rootとは、交差を監視する領域を指定する、あまり使わない
    root: null, //null:ブラウザの表示領域
    // rootMargiとは、交差を監視する領域を拡大、縮小する
    rootMargin: "-300px 0px", //pxの単位は不要
    // thresholdとは、交差の割合を指定する
    threshold: [0, 0.5, 1] //0:画面の上端、1:画面の下端
}
const io = new IntersectionObserver(cb, options);
// intersectionObserverとは、要素が画面に表示されたときに処理を実行するAPI
io.observe(child);
// io.observe(child1);
// io.observe(child2);