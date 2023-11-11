import { gql } from '@apollo/client'

const GET_ACTIVE_PAGES = gql`
  query GET_ACTIVE_PAGES {
    activeCustomPages {
      id
      name
      active
    }
  }
`

export default GET_ACTIVE_PAGES
