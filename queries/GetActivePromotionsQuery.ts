import { graphql } from '../../gql'

export const GetActivePromotions = graphql(`
  query GetActivePromotions($practiceId: ID!) {
    activePromotions(practiceId: $practiceId) {
      id
      name
      desc
      image {
        url
      }
      type
    }
  }
`)
