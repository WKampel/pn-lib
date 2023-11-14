import { gql } from '@apollo/client'

const GET_ACTIVE_PROMOTIONS = gql`
  query GET_ACTIVE_PROMOTIONS {
    activePromotions {
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
