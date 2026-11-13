const changeThemeBtn = document.querySelector('#themeBtn');
const htmlBody = document.body;

changeThemeBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('dark-mode');
});
