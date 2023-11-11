import Accordion from '../components/Accordion'
import Card from '../components/Card'
import Group from '../components/Group'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_ALL_FAQS from '../queries/GET_ALL_FAQS'

const PatientFaqsScreen = ({ data: propData }) => {
  const { data } = useQuery(GET_ALL_FAQS)
  const faqs = propData || data?.allFaqs || []

  const mockFaqs = [
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
    { question: 'What do we do?', answer: 'Nothing reallt, We just make sure that you are taken acre of and whatnot.' },
  ]

  return (
    <Screen>
      <Card scroll>
        <Group>
          <Accordion
            items={mockFaqs.map(faq => ({
              title: faq.question,
              body: faq.answer,
            }))}
          />
        </Group>
      </Card>
    </Screen>
  )
}

export default PatientFaqsScreen
