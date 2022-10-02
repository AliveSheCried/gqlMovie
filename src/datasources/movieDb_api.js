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

  getTvShow(tvShowId) {
    return this.get(`/tv/${tvShowId}?api_key=${process.env.API_KEY}`);
  }

  getMovieCredits(id) {
    return this.get(`/movie/${id}/credits?api_key=${process.env.API_KEY}`);
  }

  getTvShowCredits(id) {
    return this.get(`/tv/${id}/credits?api_key=${process.env.API_KEY}`);
  }
}

module.exports = MovieDbAPI;
