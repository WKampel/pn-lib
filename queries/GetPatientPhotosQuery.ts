import { graphql } from '../../gql'

export const GetPatientPhotos = graphql(`
  query GetPatientPhotos($patientId: ID!, $practiceId: ID!) {
    patientPhotos(patientId: $patientId, practiceId: $practiceId) {
      id
      desc
      image {
        url
      }
    }
  }
`)
