const colorSwither = document.querySelector('.color-switcher');
let timerId = null;

colorSwither.addEventListener('click', ({ target }) => {
  if (target.hasAttribute('data-start')) {
    target.nextElementSibling.toggleAttribute('disabled');
    target.toggleAttribute('disabled');
    timerId = setInterval(
      () => (document.body.style.backgroundColor = getRandomHexColor()),
      1000
    );
  }

  if (target.hasAttribute('data-stop')) {
    clearInterval(timerId);
    target.toggleAttribute('disabled');
    target.previousElementSibling.toggleAttribute('disabled');
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
