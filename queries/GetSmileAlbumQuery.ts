import { graphql } from '../../gql'

export const GetSmileAlbum = graphql(`
  query GetSmileAlbum($id: ID!, $practiceId: ID!) {
    smileAlbum(id: $id, practiceId: $practiceId) {
      id
      name
      desc
      items {
        id
        beforePhoto {
          id
          url
        }
        afterPhoto {
          id
          url
        }
      }
    }
  }
`)
