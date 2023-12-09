import { gql } from '@apollo/client'

const GET_ACTIVE_SERVICES = gql`
  query GET_ACTIVE_SERVICES($practiceId: Int!) {
    activeServices(practiceId: $practiceId) {
      id
      name
      desc
      active
      icon
    }
  }
`
export default GET_ACTIVE_SERVICES
