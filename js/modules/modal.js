export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickFora(event) {
    if (event.target === this) {
      // containerModal.classList.toggle("ativo");
      abrirModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', abrirModal);
    containerModal.addEventListener('click', clickFora);
  }
}
