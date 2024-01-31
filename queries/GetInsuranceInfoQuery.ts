import { graphql } from '../../gql'

export const GetInsuranceInfo = graphql(`
  query GetInsuranceInfo($practiceId: ID!, $patientId: ID!) {
    insuranceInfo(practiceId: $practiceId, patientId: $patientId) {
      frontPhoto {
        id
        url
      }
      backPhoto {
        id
        url
      }
      frontPhoto2 {
        id
        url
      }
      backPhoto2 {
        id
        url
      }
    }
  }
`)
