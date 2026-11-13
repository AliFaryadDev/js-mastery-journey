let themeBtn = document.querySelector('#themeBtn');
let htmlBody = document.body;

themeBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('body');
});
