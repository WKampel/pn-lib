import { gql } from '@apollo/client'

const GET_USER_INSURANCE_INFO = gql`
  query GET_USER_INSURANCE_INFO($id: ID) {
    userInsuranceInfo(id: $id) {
      frontPhoto {
        id
        url
      }
      backPhoto {
        id
        url
      }
    }
  }
`

export default GET_USER_INSURANCE_INFO
