import { HackathonMovieApi } from './movie-api.js';
import { rated } from './rated.js';
const API_KEY = '60383802';

//find a div element ".comment" for comments
const mainSection = document.querySelector('.main');
const form = document.getElementById('search-form');

//create a div element for first div
const mainPosterFunction = (response) => {
  const mainPoster = document.createElement('div');
  mainPoster.classList.add('main__poster');

  mainSection.append(mainPoster);

  const posterLink = document.createElement('img');
  posterLink.classList.add('main__poster-img');
  posterLink.src = response.data.Poster;
  posterLink.alt = 'StreamFlix_poster';

  mainPoster.append(posterLink);
};

//create a div element for second div

const mainDescriptionFunction = (response, srcRated) => {
  const mainDescription = document.createElement('div');
  mainDescription.classList.add('main__description');
  mainSection.append(mainDescription);

  //create strings

  const title = document.createElement('p');
  title.classList.add('main__description-title');
  title.textContent = response.data.Title;

  const year = document.createElement('p');
  year.classList.add('main__description-year');
  year.textContent = response.data.Year;

  const genre = document.createElement('p');
  genre.classList.add('main__description-genre');
  genre.textContent = response.data.Genre;

  const plot = document.createElement('p');
  plot.classList.add('main__description-plot');
  plot.textContent = response.data.Plot;

  const actors = document.createElement('p');
  actors.classList.add('main__description-actors');
  actors.innerText = `Actors: ${response.data.Actors}`;

  const rated = document.createElement('img');
  rated.classList.add('main__rated');

  mainDescription.append(title, year, genre, plot, actors, rated);
};

export let movieApi = new HackathonMovieApi(API_KEY);
async function searchMovie(mov) {
  try {
    let response = await movieApi.getMovieByTitle(mov);
    mainPosterFunction(response);
    mainDescriptionFunction(response);
    dataRated(response);
  } catch (err) {
    console.log(err);
  }
}

const dataRated = (response) => {
  let responseRated = response.data.Rated;

  for (let i = 0; i < rated.length; i++) {
    if (responseRated == rated[i].name) {
      let img = document.querySelector('.main__rated');
      img.src = rated[i].src;
    }
  }
};

searchMovie('friends');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  mainSection.innerHTML = '';
  const searchTexts = document.getElementById('searchInput').value;
  searchMovie(searchTexts);
});
