 let intro = document.querySelector('.intro');
let signupCloseButton = document.querySelector('#signupCloseButton');
let signup = document.querySelector('#signup')
let signupTwo = document.querySelector('#signupTwo');
let closeButton = document.querySelector('.closeButton'); 
let loginTwo = document.querySelector('#loginTwo');
let loginCard = document.querySelector('.loginCard');
loginTwo.addEventListener('click', ()=>{
  intro.style.display = "none";
  loginCard.style.display = "block";
  closeButton.style.display = "block";
  
});
closeButton.addEventListener('click', ()=>{
 loginCard.style.display = "none";
 closeButton.style.display = "none";
 intro.style.display = "block";
});
signupTwo.addEventListener('click', ()=>{
  signup.style.display = "block";
  signupCloseButton.style.display = "block";

});
signupCloseButton.addEventListener('click', ()=>{
 signup.style.display = "none";
 loginCard.style.display = "none";
  signupCloseButton.style.display = "none";
  intro.style.display = "block";
  
}); 
  
