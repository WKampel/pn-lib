import { graphql } from '../../gql'

export const GetPatientPhoto = graphql(`
  query GetPatientPhoto($id: ID!, $patientId: ID!, $practiceId: ID!) {
    patientPhoto(id: $id, patientId: $patientId, practiceId: $practiceId) {
      id
      desc
      image {
        url
      }
    }
  }
`)
