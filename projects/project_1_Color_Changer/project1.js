const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

buttons.forEach((b) => {
  b.addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.id;
  });
});