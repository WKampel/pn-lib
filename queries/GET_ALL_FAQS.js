import { gql } from '@apollo/client'

const GET_ALL_FAQS = gql`
  query GET_ALL_FAQS($practiceId: ID!) {
    allFaqs(practiceId: $practiceId) {
      id
      question
      answer
    }
  }
`

export default GET_ALL_FAQS
