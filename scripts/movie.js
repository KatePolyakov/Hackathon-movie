export class HackathonMovieApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.movieURL = 'http://www.omdbapi.com/';
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
