import { graphql } from '../../gql'

export const GetMessages = graphql(`
  query GetMessages($patientId: ID!, $practiceId: ID!) {
    messages(patientId: $patientId, practiceId: $practiceId) {
      id
      body
      createdAt
      sentBy
    }
  }
`)
