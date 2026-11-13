let changeThemeBtn = document.querySelector('#themeBtn');
let htmlBody = document.body;

changeThemeBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('dark-mode');
});
