import { ScrollView, View } from 'react-native'
import { Promotion } from '../../gql/graphql'
import { H } from '../common/components/H'
import { Image } from '../common/components/Image'
import { Pdf } from '../common/components/Pdf'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientPromotionScreen = ({ data }: { data: Omit<Promotion, 'id'> }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1, paddingHorizontal: tokens.spacing_s }}>
        <View style={{ alignItems: 'center', gap: tokens.spacing_m }}>
          <H style={{ textAlign: 'center' }}>{data.name}</H>
          <H style={{ textAlign: 'center' }} size='s'>
            {data.desc}
          </H>
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
