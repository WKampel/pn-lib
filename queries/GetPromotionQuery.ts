import { graphql } from '../../gql'

export const GetPromotion = graphql(`
  query GetPromotion($id: ID!, $practiceId: ID!) {
    promotion(id: $id, practiceId: $practiceId) {
      id
      name
      desc
      image {
        id
        url
      }
      pdf {
        id
        url
      }
      active
    }
  }
`)
