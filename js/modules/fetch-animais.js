import initAnimaNumeros from './anima-numero.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    function createAnimal(animal) {
      // console.log(animal);
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }
    try {
      const animaisR = await fetch(url);
      const animaisJson = await animaisR.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
