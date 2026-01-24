// https://www.freecodecamp.org/news/how-to-build-a-dark-mode-switcher-with-tailwind-css-and-flowbite

const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden');
  document.documentElement.classList.add('dark');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
  document.documentElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode () {
  themeToggleLightIcon.classList.toggle('hidden');
  themeToggleDarkIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') == 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
}