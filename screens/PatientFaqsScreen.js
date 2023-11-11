import Accordion from '../components/Accordion'
import Card from '../components/Card'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_ALL_FAQS from '../queries/GET_ALL_FAQS'

const PatientFaqsScreen = ({ data: propData }) => {
  const { data } = useQuery(GET_ALL_FAQS)
  const faqs = propData || data?.allFaqs || []

  return (
    <Screen>
      <Card scroll>
        <Accordion
          items={faqs.map(faq => ({
            title: faq.question,
            body: faq.answer,
          }))}
        />
      </Card>
    </Screen>
  )
}

export default PatientFaqsScreen
