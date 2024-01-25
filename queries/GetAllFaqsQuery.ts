import { graphql } from '../../gql'

export const GetAllFaqs = graphql(`
  query GetAllFaqs($practiceId: ID!) {
    allFaqs(practiceId: $practiceId) {
      id
      question
      answer
    }
  }
`)
