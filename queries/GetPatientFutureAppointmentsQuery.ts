import { graphql } from '../../gql'

export const GetPatientFutureAppointments = graphql(`
  query GetPatientFutureAppointments($practiceId: ID!, $patientId: ID!) {
    patientFutureAppointments(practiceId: $practiceId, patientId: $patientId) {
      id
      desc
      startDate
      endDate
      checkedIn
      patientFirstName
      patientLastName
      patientGender
    }
  }
`)
