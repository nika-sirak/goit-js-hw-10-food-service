const STORAGE_KEY = 'theme';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchEl = document.querySelector('.theme-switch__toggle');

// Добавляє клас на body
reloadPage();

themeSwitchEl.addEventListener('click', onCheckboxClick);

function onCheckboxClick(evt) {
  console.log(evt.target);

  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.toggle(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem(STORAGE_KEY, document.body.classList.value);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem(STORAGE_KEY, document.body.classList.value);
  }
}

// Зберігає тему
function reloadPage() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    themeSwitchEl.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}
