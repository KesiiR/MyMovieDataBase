import { movieCards } from "../utils/domUtilis.js";

export function listenForSearch() {
  document
    .querySelector("#searchForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      let searchInput = document.getElementById("searchInput");
      let searchValue = searchInput.value;
      window.location.href = `search.html?keyword=${searchValue}`;
    });
}

export function showSearchResults(results) {
  movieCards(results);
}
