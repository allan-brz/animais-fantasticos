import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    console.log('teste');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
      console.log('teste');
    });
  }
  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
