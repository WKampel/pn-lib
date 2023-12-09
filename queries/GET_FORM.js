import { gql } from '@apollo/client'

const GET_FORM = gql`
  query GET_FORM($id: ID) {
    form(id: $id) {
      id
      name
      desc
      fields {
        id
        name
        type
        required
        options {
          id
          value
        }
      }
    }
  }
`

export default GET_FORM
