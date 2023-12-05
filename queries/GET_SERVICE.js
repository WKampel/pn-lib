import { gql } from '@apollo/client'

const GET_SERVICE = gql`
  query GET_SERVICE($id: Int!, $practiceId: Int!) {
    service(id: $id, practiceId: $practiceId) {
      id
      name
      desc
      icon
      active
    }
  }
`

export default GET_SERVICE
