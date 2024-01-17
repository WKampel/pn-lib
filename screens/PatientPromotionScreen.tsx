import { ScrollView, Text, View } from 'react-native'
import { Promotion } from '../../gql/graphql'
import { Image } from '../common/components/Image'
import { Pdf } from '../common/components/Pdf'
import { Screen } from '../common/components/Screen'

export const PatientPromotionScreen = ({ data }: { data: Omit<Promotion, 'id'> }) => {
  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Text>{data.name}</Text>
          <Text>{data.desc}</Text>
        </View>

        {data.type === 'IMAGE' ? (
          <Image
            style={{
              width: '75%',
              alignSelf: 'center',
            }}
            source={data.image?.url || ''}
          />
        ) : null}

        {data.type === 'PDF' ? <Pdf style={{}} src={data.pdf?.url || ''} /> : null}
      </ScrollView>
    </Screen>
  )
}
