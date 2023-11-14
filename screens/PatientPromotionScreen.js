import { Text } from 'react-native'
import Card from '../components/Card'
import Group from '../components/Group'
import H from '../components/H'
import ImageAutoHeight from '../components/ImageAutoHeight'
import Pdf from '../components/Pdf'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_PROMOTION from '../queries/GET_PROMOTION'

const PatientPromotionScreen = ({ id, data: propData }) => {
  const { data: queryData } = useQuery(GET_PROMOTION, { variables: { id } })

  const promotion = propData || queryData?.promotion || {}

  return (
    <Screen>
      <Card style={{ flexGrow: 1 }} scroll>
        <Group style={{ alignItems: 'center' }}>
          <H>{promotion.name}</H>
          <Text>{promotion.desc}</Text>
        </Group>

        {promotion.image?.url && <ImageAutoHeight src={promotion.image.url} style={{ width: '75%', alignSelf: 'center' }} />}

        {promotion?.pdf?.url && <Pdf src={promotion.pdf.url} />}
      </Card>
    </Screen>
  )
}

export default PatientPromotionScreen
