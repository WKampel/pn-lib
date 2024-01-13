import { gql } from '@apollo/client'

const GET_ADMIN = gql`
  query GET_ADMIN($id: ID!, $practiceId: ID!) {
    admin(id: $id, practiceId: $practiceId) {
      id
      firstName
      lastName
      email
    }
  }
`

export default GET_ADMIN
