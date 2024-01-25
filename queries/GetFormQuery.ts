import { graphql } from '../../gql'

export const GetForm = graphql(`
  query GetForm($id: ID!, $practiceId: ID!) {
    form(id: $id, practiceId: $practiceId) {
      id
      name
      desc
      fields {
        id
        name
        type
        required
        options {
          id
          value
        }
      }
    }
  }
`)
