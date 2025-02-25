import { movieCardDetails, movieCards } from "../utils/domUtilis.js";
import { renderTrailers } from "./caroussel.js";

export function showTrailers(movies) {
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * movies.length);
    let movie = movies[randomIndex];
    renderTrailers(movie, i + 1);
  }
}

export function showTopMovies(movies) {
  movieCards(movies);
}

export function showFavoriteMovies(favorites) {
  movieCards(favorites);
}

export function showMovieDetails(movie) {
  movieCardDetails(movie);
}
