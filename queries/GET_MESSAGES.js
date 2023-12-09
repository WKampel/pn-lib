import { gql } from '@apollo/client'

const GET_MESSAGES = gql`
  query GET_MESSAGES($id: ID) {
    messages(patientId: $id) {
      id
      body
      createdAt
      updatedAt
      from
    }
  }
`

export default GET_MESSAGES
