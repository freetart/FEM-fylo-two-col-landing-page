import "regenerator-runtime/runtime";
import AOS from "aos";
import preloader from "./preloader.js";
import mobileMenu from "./mobileMenu.js";
import validateEmail from "./validateEmail.js";
import quotesCarousel from "./quotesCarousel.js";
import { displayData } from "./randomUser.js";

const init = () => {
  displayData();
  preloader();
  mobileMenu();
  validateEmail();
  quotesCarousel();
  AOS.init({ offset: 100, duration: 1000, once: true });
};

window.addEventListener("DOMContentLoaded", init);
