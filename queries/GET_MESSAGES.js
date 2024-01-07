import { gql } from '@apollo/client'

const GET_MESSAGES = gql`
  query GET_MESSAGES($patientId: ID!, $practiceId: ID!) {
    messages(patientId: $patientId, practiceId: $practiceId) {
      id
      body
      createdAt
      sentBy
    }
  }
`

export default GET_MESSAGES
