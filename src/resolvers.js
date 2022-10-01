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
    cast: async ({ id }, _, { dataSources }) => {
      //const type = parent.name ? "tv" : "movie";
      console.log("hello!");
      const responseData = await dataSources.movieDbAPI.getShowCredits(
        id
        //type
      );
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
