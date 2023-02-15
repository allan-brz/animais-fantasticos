export default function initAccordion() {
  const accordionDt = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = 'ativo';

  function active() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionDt.length) {
    accordionDt[0].classList.add(activeClass);
    accordionDt[0].nextElementSibling.classList.add(activeClass);
    accordionDt.forEach((item) => {
      item.addEventListener('click', active);
    });
  }
}
