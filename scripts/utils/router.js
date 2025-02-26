import {
  fetchByKeyword,
  fetchMovieDetails,
  fetchTopMovies,
} from "../modules/api.js";
import {
  showFavoriteMovies,
  showMovieDetails,
  showTopMovies,
  showTrailers,
} from "../modules/movie.js";
import { listenForSearch, showSearchResults } from "../modules/search.js";

export function route(path) {
  listenForSearch();

  const cleanPath = path.replace("/pages/", "");

  switch (cleanPath) {
    case `index.html`:
    case `/`:
      renderHome();
      break;
    case `favorites.html`:
      renderFavorites();
      break;
    case `movie.html`:
      renderMovie();
      break;
    case `search.html`:
      renderSearch();
      break;
    default:
      window.location.href = `index.html`;
  }
}

async function renderHome() {
  let movies = await fetchTopMovies();
  showTrailers(movies);
  showTopMovies(movies);
}

function renderFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favourite")) || [];
  showFavoriteMovies(favorites);
}

async function renderMovie() {
  let imdbID = new URLSearchParams(window.location.search).get("movieId");
  let movie = await fetchMovieDetails(imdbID);
  showMovieDetails(movie);
}

async function renderSearch() {
  let keyword = new URLSearchParams(window.location.search).get("keyword");
  let results = await fetchByKeyword(keyword);
  showSearchResults(results);
}
