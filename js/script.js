window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const header = document.querySelector('header');
  header.style.backgroundPosition = `center ${scrollPosition * 0.2}px`;
});