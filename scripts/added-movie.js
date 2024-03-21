
//find a div element ".comment" for comments
export const addedSection = document.querySelector('.added');
// const form = document.getElementById('search-form');

export const addedFunction = (responseImg, responseName) => {
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


