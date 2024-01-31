import { ScrollView } from 'react-native'
import { Faq } from '../../gql/graphql'
import { Accordion } from '../common/components/Accordion'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientFaqsScreen = ({ data }: { data: Faq[] }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: tokens.spacing_m, paddingTop: tokens.spacing_m }}>
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
