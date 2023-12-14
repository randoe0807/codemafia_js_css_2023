// 61．ループの記述方法
const array = [];

for(let i = 1; i < 6; i++) {
    array.push(i);
    console.log(array[i - 1]);
}
console.log(array);

// 62. ループ、for in, for of
console.log('for in');

for(let i in array) {
    // 添え字を取得
    console.log(i, array[i]);
}

console.log('for of');

for(let v of array) {
    // 値を取得, i, k, j は添え字の印象が強いので、value の v が使われる
    // 現在対応していないブラウザがあるので、babelで変換する
    console.log(v);
}

// 63.ループ実践
console.log('ループ実践');
const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true,
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true,
    },{
        id: 3,
        title: 'Go to shopping',
        completed: false,
    },
]

for(let i = 0; i < todos.length; i++){
    let todo = todos[i];
    if(todo.completed === true){
        console.log(i, todos[i].title);
    }
}
console.log('ループ実践 for in');
for(let i in todos){
    let todo = todos[i];
    if(todo.completed === true){
        console.log(todo.title);
    }
}
console.log('ループ実践 for of');
for(let v of todos){
    let todo = v;
    if(todo.completed === true){
        console.log(todo.title);
    }
}

// 64. if文 ==は値が等しいかどうか、===は型も等しいかどうか
console.log('if文');
const score = 60;
if(score >= 80){
    console.log('Great!');
} else if(score >= 60){
    console.log('Good!');
} else if (score >= 40){
    console.log('Bad!');
}

// 65. アロー関数
console.log('');
console.log('アロー関数');
const hello = function(name) {
    console.log('hello ' + name);
}

const arrowhello = name => console.log('hello ' + name);
hello('ryuichi');
arrowhello('arrowryuichi');

const array2 = [1, 2,3, 4,5];
array2.forEach(value => console.log(value));

// 66. コールバック関数
console.log('');
console.log('コールバック関数');

function hello2(callback) {
    console.log('hello ' + callback());
}

function getName(){
    return 'Code Mafia';
}

// 無名関数自体をコールバック関数として渡す
hello2(function(){
    return 'call back Code Mafia';
});
// fucntionを省略
hello2(() => {return 'lambda function Code Mafia'});
// returnを省略
hello2(() => 'lambda function2 Code Mafia');

// callback関数を引数に取る関数
function doSomething(a, b, callback) {
    // a, b を callback関数に渡す
    const result = callback(a, b);
    // resultを出力
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}
function plus(a, b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(3, 4, plus);
