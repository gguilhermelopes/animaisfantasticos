import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBtc from "./modules/fetch-btc.js";
import ScrollAnima from "./modules/scroll-anima.js";
import initMenuDropdown from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBtc("https://blockchain.info/ticker", ".btc-preco");

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

initMenuDropdown();
initMenuMobile();
initFuncionamento();
