import { gql } from '@apollo/client'

const GET_ACTIVE_PAGES = gql`
  query GET_ACTIVE_PAGES($practiceId: ID!) {
    activePages(practiceId: $practiceId) {
      id
      name
      active
    }
  }
`

export default GET_ACTIVE_PAGES
