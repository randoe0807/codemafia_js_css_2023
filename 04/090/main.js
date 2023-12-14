const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
function changeColor() {
    h1.style.color = 'red';
    console.log(btn);
}

function changeBgColor() {
    h1.style.backgroundColor = 'green';
}


// btn.addEventListener('click', hello);

// btn.onclick = changeColor;
// btn.onclick = changeBgColor;

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('click', changeBgColor);