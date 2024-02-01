import { graphql } from '../../../gql'

export const GetPatientForm = graphql(`
  query GetPatientForm($id: ID!, $practiceId: ID!, $patientId: ID!) {
    patientForm(id: $id, practiceId: $practiceId, patientId: $patientId) {
      id
      submitted
      responses {
        id
        formFieldId
        textInputValue
        textAreaValue
        yesNoValue
        radioValue
        dropdownValue
        dateValue
        timeValue
        signatureValue
      }
      form {
        id
        name
        desc
        fields {
          id
          name
          type
          required
          options {
            id
            value
          }
        }
      }
    }
  }
`)
