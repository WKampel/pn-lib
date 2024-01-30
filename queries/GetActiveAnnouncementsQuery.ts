import { graphql } from '../../gql'

export const GetActiveAnnouncements = graphql(`
  query GetActiveAnnouncements($practiceId: ID!) {
    activeAnnouncements(practiceId: $practiceId) {
      id
      text
      expiration
      createdAt
    }
  }
`)
