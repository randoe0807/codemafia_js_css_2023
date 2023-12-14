// 67. コールバック関数とループ処理
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function forEach(ary, callback) {
//     for(let i = 0; i < ary.length; i++){
//         callback(ary[i]);
//     }
// }

// function log(val) {
//     console.log(val);
// }

// function double(val){
//     val = val * 2;
//     log(val);
// }

// forEach(array, double);

// 68. 配列とforEachメソッド

array.forEach(function(v, i, ary){
    console.log(v, i, ary);
});

array.forEach(v => console.log(v));

//  reduceメソッド

array.reduce(function(accu, curr){
    console.log(accu, curr);
    // return accu + curr;
}
, 10);

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr)=>{
    // return accu + '<' + curr + '>';
    // テンプレートリテラル：バッククォートで囲むと変数を埋め込める
    return `${accu}<${curr}>`;
}, '')

console.log(result);

// reduceメソッドの応用
console.log('-------------------reduceメソッドの応用-------------------')
function tag(accu, curr){
    console.log(`tag関数が動いています。accu:${accu}, curr:${curr}`)
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue){
    let accu = defaultValue;

    for(let i = 0; i < arry.length; i++){
        let curr = arry[i];
        accu = callback(accu, curr);
    }

    return accu;
}

const result2 = reduce(strArry, tag, '');

console.log(result2);

