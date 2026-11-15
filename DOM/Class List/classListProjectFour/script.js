let closeBtn = document.querySelector('#closeBtn');
let loginCard = document.querySelector('#loginCard');
let loginBtnOne = document.querySelector('.loginBtnOne');

loginBtnOne.addEventListener('click', ()=>{
  loginCard.classList.add('showCard');
});

closeBtn.addEventListener('click', ()=>{
   loginCard.classList.remove('showCard');
});
