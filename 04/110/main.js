document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split("");

    
    // let concatStr = '';

    // for(let c of str){
    //     c = c.replace(/\s+/, '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }
    // div.animate-titleの中身を書き換える
    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, ""); // Remove the extra closing parenthesis and add a semicolon

});


// // console.log(str);
// const text = str.textContent.trim();
// // console.log(text);
// const splitText = text.split("");
// // console.log(splitText);

// str.innerHTML = splitText.reduce((acc, curr) => {
//     curr = curr.replace(/\s+/, '&nbsp;');
//     return `${acc}<span class="char">${curr}</span>`;
// }, "");
