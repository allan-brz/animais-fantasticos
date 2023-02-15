import initAccordion from './modules/accordion.js';
import initAnimationScroll from './modules/animacao-scroll.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initModal from './modules/modal.js';
import ScrollSection from './modules/scroll-suave.js';
import tabMenuActive from './modules/tab-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSection = new ScrollSection(".js-menu a[href^='#'");
scrollSection.init();

initAccordion();
initAnimationScroll();
initDropDownMenu();
initModal();
tabMenuActive();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
