import { gql } from '@apollo/client'

const GET_ACTIVE_CUSTOM_PAGES = gql`
  query GET_ACTIVE_CUSTOM_PAGES($practiceId: ID!) {
    activeCustomPages(practiceId: $practiceId) {
      id
      name
      active
    }
  }
`

export default GET_ACTIVE_CUSTOM_PAGES
