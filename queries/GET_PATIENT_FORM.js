import { gql } from '@apollo/client'

const GET_PATIENT_FORM = gql`
  query GET_PATIENT_FORM($id: ID) {
    patientForm(id: $id) {
      id
      form {
        name
        desc

        fields {
          id
          type
          name
          required
          options {
            id
            value
          }
        }
      }
      responses {
        id
        value
        formField {
          id
        }
      }
    }
  }
`

export default GET_PATIENT_FORM
