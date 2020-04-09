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

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".brands > ul").classList.toggle("nav-hidden");
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
