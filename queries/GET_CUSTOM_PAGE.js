import { gql } from '@apollo/client'

const GET_CUSTOM_PAGE = gql`
  query GET_CUSTOM_PAGE($id: ID!, $practiceId: ID!) {
    customPage(id: $id, practiceId: $practiceId) {
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

export default GET_CUSTOM_PAGE
