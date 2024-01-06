import { gql } from '@apollo/client'

const GET_FORM = gql`
  query GET_FORM($id: ID!, $practiceId: ID!) {
    form(id: $id, practiceId: $practiceId) {
      id
      name
      desc
      fields {
        id
        name
        type
        required
        options
      }
    }
  }
`

export default GET_FORM
