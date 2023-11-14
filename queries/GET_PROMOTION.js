import { gql } from '@apollo/client'

const GET_PROMOTION = gql`
  query GET_PROMOTION($id: ID) {
    promotion(id: $id) {
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
`

export default GET_PROMOTION
