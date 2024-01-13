import { graphql } from '../../../gql'

export const GetCustomPage = graphql(`
  query GetCustomPage($id: ID!, $practiceId: ID!) {
    customPage(id: $id, practiceId: $practiceId) {
      id
      name
      active
      pdf {
        id
        url
      }
      html
      type
    }
  }
`)
