const IMDB_API_URL = 'http://www.omdbapi.com/';
export class HackathonMovieApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.movieURL = IMDB_API_URL;
  }
  async getMovieByTitle(moviename) {
    try {
      let movieResponse = await axios.get(
        `${this.movieURL}?t=${moviename}&apiKey=${this.apiKey}&plot=full`,
      );
      return movieResponse;
    } catch (error) {
      console.log(error);
    }
  }
  async getMovieReccomendations(moviename) {
    try {
      let movieResponse = await axios.get(`${this.movieURL}?s=${moviename}&apiKey=${this.apiKey}`);
      return movieResponse;
    } catch (error) {
      console.log(error);
    }
  }
}
