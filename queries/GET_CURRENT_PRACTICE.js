import { gql } from '@apollo/client'

const GET_CURRENT_PRACTICE = gql`
  query GET_CURRENT_PRACTICE {
    currentPractice {
      id
      email
      slogan
      url
      name
      website
      phone
      logo {
        id
        url
      }
      branding {
        primaryColor
      }
      sikkaOfficeId
      stripePaymentLink
      subscribed
    }
  }
`

export default GET_CURRENT_PRACTICE
