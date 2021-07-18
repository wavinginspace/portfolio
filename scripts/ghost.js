const ghost = document.querySelector('.ghost');

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    ghost.classList.add('move-ghost');
  } else {
    ghost.classList.remove('move-ghost');
  }
};
