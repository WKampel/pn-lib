import { graphql } from '../../gql'

export const GetPractice = graphql(`
  query GetPractice($url: String!) {
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
      confirmationNotice
    }
  }
`)
