import { graphql } from '../../gql'

export const GetPatientPastAppointments = graphql(`
  query GetPatientPastAppointments($practiceId: ID!, $patientId: ID!) {
    patientPastAppointments(practiceId: $practiceId, patientId: $patientId) {
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
