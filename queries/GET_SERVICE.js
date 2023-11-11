import { gql } from '@apollo/client'

const GET_SERVICE = gql`
  query GET_SERVICE($id: Int) {
    service(id: $id) {
      id
      name
      desc
      icon
      active
    }
  }
`

export default GET_SERVICE
