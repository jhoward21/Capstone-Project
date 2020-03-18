import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": ({ page }) => render(state[capitalize(page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  console.log("rendering state", st);
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}`;
}

router.updatePageLinks();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".brands > ul").classList.toggle("nav-hidden");
});
