import { ScrollView } from 'react-native'
import Accordion from '../components/Accordion'
import Group from '../components/Group'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_ALL_FAQS from '../queries/GET_ALL_FAQS'

const PatientFaqsScreen = ({ data: propData }) => {
  const { data } = useQuery(GET_ALL_FAQS)
  const faqs = propData || data?.allFaqs || []

  return (
    <Screen>
      <ScrollView>
        <Group>
          <Accordion
            items={faqs.map(faq => ({
              title: faq.question,
              body: faq.answer,
            }))}
          />
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default PatientFaqsScreen
