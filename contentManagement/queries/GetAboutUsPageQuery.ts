import { graphql } from '../../../gql'

export const GetAboutUsPage = graphql(`
  query GetAboutUsPage($practiceId: ID!) {
    aboutUsPage(practiceId: $practiceId) {
      id
      name
      pdf {
        id
        url
      }
      html
      type
    }
  }
`)
