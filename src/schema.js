const { gql } = require("apollo-server");

//typeDefs const
const typeDefs = gql`
  type Query {
    "Return movie from ext. rest API using ID"
    movie(id: ID!): Movie
    tvShow(id: ID!): TvShow
  }

  "Interface SHOW that has generic movie/tv data elements"
  interface Show {
    "Tv show / movie's ID"
    id: ID!
    "Tv show / movie's overview"
    overview: String
    "Tv show / movie's status"
    status: String
    "Tv show / movie list of production companies"
    production_companies: [ProductionCompany!]
    "Tv show / movie's acting cast"
    cast: [Cast!]
  }

  "Basic data about a movie"
  type Movie implements Show {
    ## From Show
    "Tv show / movie's ID"
    id: ID!
    "Tv show / movie's overview"
    overview: String
    "Tv show / movie's status"
    status: String
    "Tv show / movie list of production companies"
    production_companies: [ProductionCompany!]
    "Tv show / movie's acting cast"
    cast: [Cast!]
    ## unique to Movie
    "Film title"
    title: String!
    "Film release date"
    release_date: String
  }

  type TvShow implements Show {
    ## From Show
    "Tv show / movie's ID"
    id: ID!
    "Tv show / movie's overview"
    overview: String
    "Tv show / movie's status"
    status: String
    "Tv show / movie list of production companies"
    production_companies: [ProductionCompany!]
    "Tv show / movie's acting cast"
    cast: [Cast!]
    ## unique to TvShow
    "Tv show's name"
    name: String!
    "Tv show's first air date"
    first_air_date: String
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
