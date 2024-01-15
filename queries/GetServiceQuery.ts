import { graphql } from '../../gql'

export const GetService = graphql(`
  query GetService($id: ID!, $practiceId: ID!) {
    service(id: $id, practiceId: $practiceId) {
      id
      name
      desc
      icon
      active
    }
  }
`)
