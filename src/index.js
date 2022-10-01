const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const MovieDbAPI = require("./datasources/movieDb_api.js");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      movieDbAPI: new MovieDbAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
});
