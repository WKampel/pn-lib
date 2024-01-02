import { gql } from '@apollo/client'

const GET_ALL_SMILE_ALBUMS = gql`
  query GET_ALL_SMILE_ALBUMS($practiceId: ID!) {
    allSmileAlbums(practiceId: $practiceId) {
      id
      name
      desc
    }
  }
`

export default GET_ALL_SMILE_ALBUMS
