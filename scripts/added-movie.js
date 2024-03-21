import { mightSeeMovie } from './movie-api.js';
const API_KEY = '60383802';

//find a div element ".comment" for comments
const addedSection = document.querySelector('.added');
const form = document.getElementById('search-form');

const addedFunction = (responseImg, responseName) => {
  //created container for one video
  const movieContainer = document.createElement('div');
  movieContainer.classList.add('added__container');
  addedSection.append(movieContainer);

  //created childs elements
  const moviePoster = document.createElement('img');
  moviePoster.classList.add('added__container-poster');
  moviePoster.src = responseImg;

  const movieName = document.createElement('p');
  movieName.classList.add('added__container-name');
  movieName.innerText = responseName;

  //put into parent container
  movieContainer.append(moviePoster, movieName);
};

let addedMovieAPI = new mightSeeMovie(API_KEY);
async function addedMovie(mov) {
  try {
    let response = await addedMovieAPI.getMovies(mov);
    let array = response.data.Search;
    let responseName = '';
    let responseImg = '';

    for (let i = 1; i < 6; i++) {
      responseName = array[i].Title;
      responseImg = array[i].Poster;
      addedFunction(responseImg, responseName);
    }
  } catch (err) {
    console.log(err);
  }
}

addedMovie('friends');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addedSection.innerHTML = '';
  const searchTexts = document.getElementById('searchInput').value;
  addedMovie(searchTexts);
});
