import { gql } from "@apollo/client";

export const QUERY_GAME = gql`
  query GetGame($getGameId: ID) {
    getGame(id: $getGameId) {
      _id
      area {
        areaCountry
        city
        street
      }
      contactNumber
      dateGame
      description
      genre
      imageAlt
      imageUrl
      name
      platforms
      userId
      email
    }
  }
`;

export const QUERY_GAMES = gql`
  query GetGames {
    getGames {
      _id
      area {
        areaCountry
        city
        street
      }
      contactNumber
      dateGame
      description
      genre
      imageAlt
      imageUrl
      name
      platforms
      userId
      email
    }
  }
`;

export const QUERY_GAMES_BY_USERID = gql`
  query GetGamesByUserId($getGamesByUserIdId: String) {
    getGamesByUserId(id: $getGamesByUserIdId) {
      _id
      address {
        areaCountry
        city
        street
      }
      contactNumber
      dateGame
      description
      genre
      email
      imageAlt
      name
      imageUrl
      platforms
      userId
    }
  }
`;

export const QUERY_USERS = gql`
  query GetUser {
    getUsers {
      _id
      email
      password
    }
  }
`;

export const QUERY_USER = gql`
  query GetUser($getUserId: ID) {
    getUser(id: $getUserId) {
      _id
      email
      password
    }
  }
`;
