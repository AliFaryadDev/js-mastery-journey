let changeThemeBtn = document.querySelector('#themeBtn');
let htmlBody = document.body;

ThemeBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('dark-mode');
});
