import { graphql } from '../../gql'

export const GetPatientSmileMakeovers = graphql(`
  query GetPatientSmileMakeovers($patientId: ID!, $practiceId: ID!) {
    patientSmileMakeovers(patientId: $patientId, practiceId: $practiceId) {
      id
      like
      change
      image {
        url
      }
    }
  }
`)
