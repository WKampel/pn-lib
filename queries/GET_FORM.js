import { gql } from '@apollo/client'

const GET_FORM = gql`
  query GET_FORM($id: Int) {
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
