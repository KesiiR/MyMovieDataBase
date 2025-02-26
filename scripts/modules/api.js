import config from "../config.js";

export async function fetchTopMovies() {
  try {
    const response = await fetch(
      "https://santosnr6.github.io/Data/favoritemovies.json"
    );
    let movies = await response.json();
    return movies;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchByKeyword(keyword) {
  try {
    let params = new URLSearchParams({
      query: keyword,
      include_adult: false,
      api_key: config.TMDB_API,
      page: 1,
    });
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params.toString()}`
    );
    let data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(id) {
  try {
    let params = new URLSearchParams({
      api_key: config.TMDB_API,
    });
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?${params.toString()}`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
