import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}`;
}
render(state.Home);

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".brands > ul").classList.toggle("nav-hidden");
});
