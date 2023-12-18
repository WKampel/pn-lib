import { gql } from '@apollo/client'

const GET_ACTIVE_PROMOTIONS = gql`
  query GET_ACTIVE_PROMOTIONS($practiceId: ID!) {
    activePromotions(practiceId: $practiceId) {
      id
      name
      desc
      image {
        url
      }
    }
  }
`

export default GET_ACTIVE_PROMOTIONS
