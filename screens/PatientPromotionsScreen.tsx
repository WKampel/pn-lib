import { ScrollView } from 'react-native'
import { GetActivePromotionsQuery, GetActivePromotionsQueryVariables } from '../../gql/graphql'
import { Promotion } from '../common/components/Promotion'
import { Screen } from '../common/components/Screen'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { useTheme } from '../common/hooks/useTheme'
import { GetActivePromotions } from '../queries/GetActivePromotionsQuery'

export const PatientPromotionsScreen = ({ onPressPromotion }: { onPressPromotion?: (id: string) => void }) => {
  const { data } = usePracticeQuery<GetActivePromotionsQuery, GetActivePromotionsQueryVariables>(GetActivePromotions, { variables: {} })
  const promotions = data?.activePromotions || []

  const { tokens } = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: tokens.spacing_m, paddingHorizontal: tokens.spacing_m, paddingTop: tokens.spacing_m }}>
        {promotions.map(promotion => (
          <Promotion key={promotion.id} name={promotion.name} onPress={() => onPressPromotion?.(promotion.id)} />
        ))}
      </ScrollView>
    </Screen>
  )
}
