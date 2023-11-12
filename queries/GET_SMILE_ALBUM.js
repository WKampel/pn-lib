import { gql } from '@apollo/client'

const GET_SMILE_ALBUM = gql`
  query GET_SMILE_ALBUM($id: Int) {
    smileAlbum(id: $id) {
      id
      name
      desc
      items {
        id
        beforePhoto {
          id
          url
        }
        afterPhoto {
          id
          url
        }
      }
    }
  }
`

export default GET_SMILE_ALBUM
