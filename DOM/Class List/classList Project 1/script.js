
let body = document.body;

let btnOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');

btnOne.addEventListener('click', () => {
  body.classList.add('theme');
});

btnTwo.addEventListener('click', () => {
  body.classList.remove('theme');
});
