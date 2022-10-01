const resolvers = {
  Query: {
    movie: (_, { id }, { dataSources }) => {
      return dataSources.movieDbAPI.getMovie(id);
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
};

module.exports = resolvers;
