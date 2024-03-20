//find a div element ".comment" for comments
const mainSection = document.querySelector('.main');

//create a div element for first div
const mainPosterFunction = () => {
  const mainPoster = document.createElement('div');
  mainPoster.classList.add('main__poster');

  mainSection.append(mainPoster);

  const posterLink = document.createElement('img');
  posterLink.classList.add('main__poster-img');
  posterLink.src =
    'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg';
  posterLink.alt = 'StreamFlix_poster';

  mainPoster.append(posterLink);
};

//create a div element for second div

const mainDescriptionFunction = () => {
  const mainDescription = document.createElement('div');
  mainDescription.classList.add('main__description');
  mainSection.append(mainDescription);

  //create strings

  const title = document.createElement('p');
  title.classList.add('main__description-title');
  title.textContent = 'Titanic';

  const year = document.createElement('p');
  title.classList.add('main__description-year');
  title.textContent = '1997';

  const genre = document.createElement('p');
  genre.classList.add('main__description-genre');
  genre.textContent = 'History';

  const plot = document.createElement('p');
  plot.classList.add('main__description-plot');
  plot.textContent =
    'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.';

  const actors = document.createElement('p');
  actors.classList.add('main__description-actors');
  actors.innerText = 'Leonardo DiCaprio, Kate Winslet, Billy Zane';

  mainDescription.append(title, year, genre, plot, actors);
};

mainPosterFunction();
mainDescriptionFunction();

// let movieApi= new HackathonMovieApi(API_KEY);
// async function searchMovie(mov){
//     try{
//         let response = await movieApi.getMovieByTitle(mov)

//         console.log(response)

//     }catch(err){
//         console.log(err)
//     }

// }

// searchMovie("titanic")
