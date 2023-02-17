import Accordion from './modules/accordion.js';
import initAnimationScroll from './modules/animacao-scroll.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initModal from './modules/modal.js';
import ScrollSection from './modules/scroll-suave.js';
import TabMenu from './modules/tab-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSection = new ScrollSection(".js-menu a[href^='#'");
scrollSection.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabMenu(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

initAnimationScroll();
initDropDownMenu();
initModal();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
