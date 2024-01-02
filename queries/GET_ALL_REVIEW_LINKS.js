import { gql } from '@apollo/client'

const GET_ALL_REVIEW_LINKS = gql`
  query GET_ALL_REVIEW_LINKS($practiceId: ID!) {
    allReviewLinks(practiceId: $practiceId) {
      id
      link
      icon
      name
    }
  }
`

export default GET_ALL_REVIEW_LINKS
