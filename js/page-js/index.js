window.onbeforeunload = function () {
        window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
  var scrollPosition = window.pageYOffset;
  var header = document.querySelector('header');
  header.style.backgroundPosition = `center ${scrollPosition * 0.2}px`;
});