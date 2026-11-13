const changeThemeBtn = document.querySelector('#theme-btn');
const htmlBody = document.body;

changeThemeBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('dark-mode');
});
