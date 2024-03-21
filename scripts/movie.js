const IMDB_API_URL = 'http://www.omdbapi.com/';
const API_KEY = '60383802';

class HackathonMovieApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.movieURL = IMDB_API_URL;
  }
  async getMovieByTitle(moviename) {
    try {
      let movieResponse = axios.get(
        `${this.movieURL}?t=${moviename}&apiKey=${this.apiKey}&plot=full`,
      );
      //console.log("data for kate", movieResponse.title);
      return movieResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

//EXAMPLE
let movieApi = new HackathonMovieApi(API_KEY);
async function searchMovie(mov) {
  try {
    let response = await movieApi.getMovieByTitle(mov);

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

searchMovie('titanic');
