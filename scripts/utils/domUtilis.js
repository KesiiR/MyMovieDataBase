function toggleFavorite(movie, favouriteButton) {
  let favourites = JSON.parse(localStorage.getItem("favourite")) || [];
  let index = 0;
  if (movie.imdbID) {
    index = favourites.findIndex((fav) => fav.imdbID === movie.imdbID);
  } else {
    index = favourites.findIndex((fav) => fav.id === movie.id); // TMDB
  }

  if (index === -1) {
    favourites.push(movie);
  } else {
    favourites.splice(index, 1);
  }

  localStorage.setItem("favourite", JSON.stringify(favourites));
  updateFavoriteIcon(movie, favouriteButton);
}

function updateFavoriteIcon(movie, favouriteButton) {
  let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
  let isFavorite = false;
  if (movie.imdbID) {
    isFavorite = favourite.some((fav) => fav.imdbID === movie.imdbID);
  } else {
    isFavorite = favourite.some((fav) => fav.id === movie.id);
  }

  if (isFavorite) {
    favouriteButton.innerHTML = `<i class="fa-solid fa-star"></i>`; // Filled star
  } else {
    favouriteButton.innerHTML = `<i class="fa-regular fa-star"></i>`; // Empty star
  }
}

export function movieCards(movies) {
  let cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  movies.forEach((movie) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let favouriteButton = document.createElement("div");
    favouriteButton.classList.add("favourite");
    favouriteButton.innerHTML = `<i class="fa-solid fa-star"></i>`;

    // Add event listener to favourite button
    favouriteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(movie, favouriteButton);
    });

    let source = "";
    if (movie.Poster) {
      source = movie.Poster;
    } else if (movie.poster_path) {
      source = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    } else {
      source = "../../assets/icons/missing-poster.jpg";
    }

    card.innerHTML = `
            <img src="${source}" alt="${
      movie.Title || movie.original_title
    }" class="card__img" />
            <div class="card__info">
                <h3 class="card__title">${
                  movie.Title || movie.original_title
                }</h3>        
            </div>
            `;
    cardContainer.appendChild(card);
    card.appendChild(favouriteButton);
    updateFavoriteIcon(movie, favouriteButton);
    card.addEventListener("click", () => {
      window.location.href = `movie.html?movieId=${movie.imdbID || movie.id}`;
    });
  });
}

export function movieCardDetails(movie) {
  let cardContainer = document.getElementById("movieInformation");
  cardContainer.innerHTML = "";

  let card = document.createElement("div");
  card.classList.add("card-details");

  card.innerHTML = `
            <img src="${
              "https://image.tmdb.org/t/p/w500" + movie.poster_path
            }" alt="${movie.Title || movie.original_title}" class="card__img" />
            <div class="card__info">
                <h3 class="card__titleOnClick">${
                  movie.Title || movie.original_title
                }</h3>        
                <p class="card__description">Movie Plot: ${
                  movie.Plot || movie.overview
                }</p>
                <p class="card__smallinfo">Published: ${movie.release_date}</p>
                <p class="card__smallinfo">Rating: ${
                  movie.imdbRating || movie.vote_average
                } imdb</p>
                <p class="card__smallinfo">Duration: ${
                  movie.Runtime || movie.runtime
                } mins</p>
           
                
            </div>
            `;
  cardContainer.appendChild(card);
}
