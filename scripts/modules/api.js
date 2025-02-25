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

/* 0
: 
adult
: 
false
backdrop_path
: 
"/frDS8A5vIP927KYAxTVVKRIbqZw.jpg"
genre_ids
: 
(3) [14, 28, 80]
id
: 
268
original_language
: 
"en"
original_title
: 
"Batman"
overview
: 
"Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld."
popularity
: 
34.694
poster_path
: 
"/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg"
release_date
: 
"1989-06-21"
title
: 
"Batman"
video
: 
false
vote_average
: 
7.231
vote_count
: 
7947 */
