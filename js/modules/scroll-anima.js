import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 100);
  }

  // Pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = Array.from(this.sections).map((section) => {
      const distY = section.offsetTop;
      return {
        element: section,
        distY: distY - this.windowMetade,
      };
    });
  }

  // Verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    console.log('teste');
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.distY) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  animaScroll() {
    this.sections.forEach((section) => {
      // section.getBoundingClientRect.. pega a partir de onde se inicia a página
      const distY = section.getBoundingClientRect().top - this.windowMetade;
      if (distY < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
