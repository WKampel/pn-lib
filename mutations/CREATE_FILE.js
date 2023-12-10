import { gql } from '@apollo/client'

const CREATE_FILE = gql`
  mutation ($file: Upload!, $practiceId: ID!) {
    createFile(file: $file, practiceId: $practiceId) {
      id
      url
    }
  }
`

export default CREATE_FILE
