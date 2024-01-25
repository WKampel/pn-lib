import { graphql } from '../../gql'

export const GetAllSmileAlbums = graphql(`
  query GetAllSmileAlbums($practiceId: ID!) {
    allSmileAlbums(practiceId: $practiceId) {
      id
      name
      desc
    }
  }
`)
