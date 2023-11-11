import { gql } from '@apollo/client'

const GET_PAGE = gql`
  query GET_PAGE($id: Int, $name: String) {
    page(id: $id, name: $name) {
      id
      name
      active
      fields {
        id
        type
        value
        file {
          id
          url
        }
        size
        align
      }
    }
  }
`

export default GET_PAGE
