
let paraOne = document.querySelector('p');
let btnOne = document.querySelector('#btnOne');

btnOne.addEventListener('click', () => {
  paraOne.classList.add('paraOne');
});

let btnTwo = document.querySelector('#btnTwo');

btnTwo.addEventListener('click', () => {
  paraOne.classList.remove('paraOne');
});
