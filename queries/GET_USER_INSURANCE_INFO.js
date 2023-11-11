import { gql } from '@apollo/client'

const GET_USER_INSURANCE_INFO = gql`
  query GET_USER_INSURANCE_INFO($id: Int) {
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
