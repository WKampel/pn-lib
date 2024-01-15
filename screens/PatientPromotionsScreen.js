import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card'
import PromotionCard from '../components/PromotionCard'
import Screen from '../components/Screen'
import { usePracticeQuery } from '../hooks/usePracticeQuery'
import GET_ACTIVE_PROMOTIONS from '../queries/GetActivePromotionsQuery'

const PatientPromotionsScreen = ({}) => {
  const { data } = usePracticeQuery(GET_ACTIVE_PROMOTIONS)
  const promotions = data?.activePromotions || []

  const nav = useNavigation()

  return (
    <Screen>
      <Card scroll>
        {promotions.map(promotion => (
          <PromotionCard key={promotion.id} name={promotion.name} onPress={() => nav.navigate('Promotion', { id: promotion.id })} />
        ))}
      </Card>
    </Screen>
  )
}

export default PatientPromotionsScreen
