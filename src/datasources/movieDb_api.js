const { RESTDataSource } = require("apollo-datasource-rest");

class MovieDbAPI extends RESTDataSource {
  constructor() {
    super();

    //movieDB url
    this.baseURL = "https://api.themoviedb.org/3";
  }

  //methods
  getMovie(movieId) {
    return this.get(`/movie/${movieId}?api_key=${process.env.API_KEY}`);
  }

  getMovieCredits(movieId) {
    return this.get(`/movie/${movieId}/credits?api_key=${process.env.API_KEY}`);
  }
}

module.exports = MovieDbAPI;
