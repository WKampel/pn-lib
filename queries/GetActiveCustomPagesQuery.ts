import { graphql } from '../../gql'

export const GetActiveCustomPages = graphql(`
  query GetActiveCustomPages($practiceId: ID!) {
    activeCustomPages(practiceId: $practiceId) {
      id
      name
      active
    }
  }
`)
