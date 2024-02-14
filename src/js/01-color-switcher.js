const colorSwither = document.querySelector('.color-switcher');
let timerId = null;

colorSwither.addEventListener('click', ({ target, currentTarget }) => {
  if (target.hasAttribute('data-start')) {
    toogleButtons(currentTarget);
    changeBgColor();
    timerId = setInterval(changeBgColor, 1000);
  }

  if (target.hasAttribute('data-stop')) {
    clearInterval(timerId);
    toogleButtons(currentTarget);
  }
});

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function toogleButtons(target) {
  target.firstElementChild.toggleAttribute('disabled');
  target.lastElementChild.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
