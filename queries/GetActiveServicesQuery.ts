import { graphql } from '../../gql'

export const GetActiveServices = graphql(`
  query GetActiveServices($practiceId: ID!) {
    activeServices(practiceId: $practiceId) {
      id
      name
      desc
      active
      icon
    }
  }
`)
