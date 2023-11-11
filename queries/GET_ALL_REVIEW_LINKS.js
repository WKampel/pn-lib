import { gql } from '@apollo/client'

const GET_ALL_REVIEW_LINKS = gql`
  query GET_ALL_REVIEW_LINKS {
    allReviewLinks {
      id
      link
      icon
      name
    }
  }
`

export default GET_ALL_REVIEW_LINKS
