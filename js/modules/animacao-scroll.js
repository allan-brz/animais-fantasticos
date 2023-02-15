export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const distY = section.getBoundingClientRect().top - windowMetade;
      if (distY < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    window.addEventListener('scroll', animaScroll);
    animaScroll();
  }
}
