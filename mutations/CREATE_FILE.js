import { gql } from '@apollo/client'

const CREATE_FILE = gql`
  mutation ($file: Upload) {
    createFile(file: $file) {
      id
      url
    }
  }
`

export default CREATE_FILE
