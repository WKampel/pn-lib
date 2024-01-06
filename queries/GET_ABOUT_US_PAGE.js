import { gql } from '@apollo/client'

const GET_ABOUT_US_PAGE = gql`
  query GET_ABOUT_US_PAGE($practiceId: ID!) {
    aboutUsPage(practiceId: $practiceId) {
      id
      name
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

export default GET_ABOUT_US_PAGE
