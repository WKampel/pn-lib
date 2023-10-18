import { gql } from '@apollo/client'
import { ScrollView, Text } from 'react-native'
import Group from '../components/Group'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'

const GET_FAQS = gql`
  query GetFaqs {
    allFaqs {
      id
      question
      answer
    }
  }
`

const FaqsScreen = ({}) => {
  const { data } = useQuery(GET_FAQS)
  const faqs = data?.allFaqs || []

  return (
    <Screen>
      <ScrollView>
        <Group>
          {faqs.map(faq => (
            <Group>
              <Text>{faq.question}</Text>
              <Text>{faq.answer}</Text>
            </Group>
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default FaqsScreen
