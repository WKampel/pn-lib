import { gql } from '@apollo/client'

const GET_PRACTICE = gql`
  query GET_PRACTICE($url: String!) {
    practice(url: $url) {
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
      primaryColor
      sikkaOfficeId
      stripePaymentLink
      subscribed
    }
  }
`

export default GET_PRACTICE
