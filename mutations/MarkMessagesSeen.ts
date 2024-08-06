import { graphql } from '../../gql'

export const MarkMessagesSeen = graphql(`
  mutation MarkMessagesSeen($patientId: ID!, $practiceId: ID!) {
    markMessagesSeen(patientId: $patientId, practiceId: $practiceId)
  }
`)
