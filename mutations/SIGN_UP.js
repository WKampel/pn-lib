import { gql } from '@apollo/client'

const SIGN_UP = gql`
  mutation ($input: SignUpInput) {
    signUp(input: $input) {
      token
    }
  }
`

export default SIGN_UP
