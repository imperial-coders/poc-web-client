import { gql } from "@/types/gql";

export const HOME_QUERY = gql(`
  query getUserDataForHomePage($userId: ID!) {
    getUser(id: $userId) {
      id
      firstName
      lastName
      email
      userSettings {
        id
        createdAt
        updatedAt
        favoriteStarWarsCharacter {
          id
          name
        }
      }
    }
  }
`);
