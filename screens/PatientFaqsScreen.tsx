import { ScrollView } from 'react-native'
import { Faq } from '../../gql/graphql'
import { Accordion } from '../common/components/Accordion'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientFaqsScreen = ({ data }: { data: Faq[] }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1, gap: tokens.spacing_l }}>
        <Accordion
          items={data.map(faq => ({
            title: faq.question,
            body: faq.answer,
          }))}
        />
      </ScrollView>
    </Screen>
  )
}
