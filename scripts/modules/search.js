import { movieCards } from "../utils/domUtilis.js";

export function listenForSearch() {
  let formDefault = document.querySelector("#Hamburger-searchForm");
  let formDuplicate = document.querySelector("#searchForm");

  formDefault.addEventListener("submit", async (e) => {
    e.preventDefault();
    let searchInput = document.getElementById("searchInput");
    let searchValue = searchInput.value;
    if (searchValue === "") {
      return;
    }
    window.location.href = `search.html?keyword=${searchValue}`;
  });
  formDuplicate.addEventListener("submit", async (e) => {
    e.preventDefault();
    let searchInput = document.getElementById("searchInputCopy");
    let searchValue = searchInput.value;
    if (searchValue === "") {
      return;
    }
    window.location.href = `search.html?keyword=${searchValue}`;
  });
}

export function showSearchResults(results) {
  movieCards(results);
}
