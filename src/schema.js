const { gql } = require("apollo-server");

//typeDefs const
const typeDefs = gql`
  type Query {
    "Return movie from ext. rest API using ID"
    movie(id: ID!): Movie
  }

  "Basic data about a movie"
  type Movie {
    id: ID!
    "Film title"
    title: String!
    "Overview of film"
    overview: String
    "Film release date"
    release_date: String
    "List of production companies"
    production_companies: [ProductionCompany!]
    "Film cast"
    cast: [Cast!]
  }

  "Production company who worked on film"
  type ProductionCompany {
    id: ID!
    name: String!
    country: String
  }

  "Cast of tv / film"
  type Cast {
    id: ID!
    name: String!
    character: String
  }
`;

module.exports = typeDefs;
