import { gql } from '@apollo/client'

const GET_ALL_SMILE_ALBUMS = gql`
  query GET_ALL_SMILE_ALBUMS {
    allSmileAlbums {
      id
      name
      desc
    }
  }
`

export default GET_ALL_SMILE_ALBUMS
