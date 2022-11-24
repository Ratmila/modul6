let form = document.querySelector('#form');
let textInput = document.querySelector('#textInput');
let text = document.querySelector('#kopirovanie');

textInput.addEventListener('keypress', (event) => {
    text.textContent = text.textContent + event.key;
});

form.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(text.textContent);
    text.textContent = '';
    form.reset();
});