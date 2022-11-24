const abc = prompt('Введите любой текст');
const bcd = document.querySelector('.ssilka');


bcd.textContent = abc;
console.log('Текст cсылки успешно  изменён на', abc);


document.addEventListener('click', function(event) {
    event.preventDefault();
})

