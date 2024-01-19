import { ScrollView } from 'react-native'
import { GetActivePromotionsQuery, GetActivePromotionsQueryVariables } from '../../gql/graphql'
import { Promotion } from '../common/components/Promotion'
import { Screen } from '../common/components/Screen'
import { useNav } from '../common/hooks/useNav'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { GetActivePromotions } from '../queries/GetActivePromotionsQuery'

export const PatientPromotionsScreen = () => {
  const { data } = usePracticeQuery<GetActivePromotionsQuery, GetActivePromotionsQueryVariables>(GetActivePromotions, { variables: {} })
  const promotions = data?.activePromotions || []

  const nav = useNav()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        {promotions.map(promotion => (
          <Promotion key={promotion.id} name={promotion.name} onPress={() => nav.navigate('Promotion', { id: promotion.id })} />
        ))}
      </ScrollView>
    </Screen>
  )
}
