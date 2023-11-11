import { gql } from '@apollo/client'

const GET_ME = gql`
  query {
    me {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`

export default GET_ME
