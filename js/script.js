import Accordion from './modules/accordion.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/dropdown-menu.js';
import Modal from './modules/modal.js';
import ScrollSection from './modules/scroll-suave.js';
import TabMenu from './modules/tab-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
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

const modal = new Modal(
  "[data-modal='abrir']",
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

initMenuMobile();
initFuncionamento();

fetchAnimais('./animaisapi.json', '.numeros-grid');
initFetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
