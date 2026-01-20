document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  const body = document.body;

  menuBtn.addEventListener('click', navToggle);
  
  function navToggle () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
  }
});
