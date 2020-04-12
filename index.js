import { Header, Nav, Main, Sidebar } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
console.log(state);
const router = new Navigo(window.location.origin);

router
  .on({
    ":page": ({ page }) => {
      render(state[page]);
    },
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  console.log("rendering state", st);
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  `;

  router.updatePageLinks();
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle Nav

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  //Animate Links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinks 0.5s ease forwards ${index / 7 + 0.3}s`;
  });
};

navSlide();
