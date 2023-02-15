export default function scrollToSection() {
  const linkInternos = document.querySelectorAll(".js-menu a[href^='#'");

  function scrollToSection1(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Maneira alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }

  linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection1);
  });
}
