import { graphql } from '../../gql'

export const GetAdmin = graphql(`
  query GetAdmin($id: ID!, $practiceId: ID!) {
    admin(id: $id, practiceId: $practiceId) {
      id
      firstName
      lastName
      email
    }
  }
`)
