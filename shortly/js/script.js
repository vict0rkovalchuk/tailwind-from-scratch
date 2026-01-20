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
  

  const input = document.getElementById('link-input');
  const linkForm = document.getElementById('link-form');
  const errMsg = document.getElementById('err-msg');

  linkForm.addEventListener('submit', formSubmit);

  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

  function formSubmit (e) {
    e.preventDefault();
    
    if (input.value === '') {
      errMsg.textContent = 'Please enter something';
      input.classList.add('border-red');
    } else if (!validURL(input.value)) {
      errMsg.textContent = 'Please enter a valid URL';
      input.classList.add('border-red');
    } else {
      errMsg.textContent = '';
      input.classList.remove('border-red');
      linkForm.submit();
    }
  }
});