import { graphql } from '../../gql'

export const GetPatientFutureAppointments = graphql(`
  query GetPatientFutureAppointments($practiceId: ID!, $patientId: ID!) {
    patientFutureAppointments(practiceId: $practiceId, patientId: $patientId) {
      id
      desc
      startDate
      endDate
      confirmed
      patientFirstName
      patientLastName
      patientGender
      notified
      patientId
    }
  }
`)
