import { graphql } from '../../gql'

export const CreateFile = graphql(`
  mutation CreateFile($file: Upload!, $practiceId: ID!) {
    createFile(file: $file, practiceId: $practiceId) {
      id
      url
    }
  }
`)
