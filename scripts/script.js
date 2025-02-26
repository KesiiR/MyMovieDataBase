import { route } from "./utils/router.js";

document.addEventListener("DOMContentLoaded", render);
function render() {
  route(window.location.pathname);
}
