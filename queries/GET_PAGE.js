import { gql } from '@apollo/client'

const GET_PAGE = gql`
  query GET_PAGE($id: ID!, $practiceId: ID!) {
    page(id: $id, practiceId: $practiceId) {
      id
      name
      active
      items {
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
