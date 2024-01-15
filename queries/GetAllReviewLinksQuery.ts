import { graphql } from '../../gql'

export const GetAllReviewLinks = graphql(`
  query GetAllReviewLinks($practiceId: ID!) {
    allReviewLinks(practiceId: $practiceId) {
      id
      link
      icon
      name
    }
  }
`)
