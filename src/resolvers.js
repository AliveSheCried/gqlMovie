const resolvers = {
  Query: {
    movie: (_, { id }, { dataSources }) => {
      return dataSources.movieDbAPI.getMovie(id);
    },
    tvShow: (_, { id }, { dataSources }) => {
      return dataSources.movieDbAPI.getTvShow(id);
    },
  },
  Show: {
    __resolveType(Show) {
      if (Show.name === true) {
        return "TV Show";
      }
      return "Movie";
    },
  },
  Movie: {
    cast: async ({ id }, _, { dataSources }) => {
      const responseData = await dataSources.movieDbAPI.getMovieCredits(id);
      const cast = responseData.cast.map((member) => {
        return {
          id: member.id,
          name: member.name,
          character: member.character,
        };
      });

      return cast;
    },
  },
  TvShow: {
    cast: async ({ id }, _, { dataSources }) => {
      const responseData = await dataSources.movieDbAPI.getTvShowCredits(id);
      const cast = responseData.cast.map((member) => {
        return {
          id: member.id,
          name: member.name,
          character: member.character,
        };
      });

      return cast;
    },
  },
};

module.exports = resolvers;
