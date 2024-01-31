import { View } from 'react-native'
import { Promotion } from '../../gql/graphql'
import { H } from '../common/components/H'
import { ImageAutoHeight } from '../common/components/ImageAutoHeight'
import { Pdf } from '../common/components/Pdf'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientPromotionScreen = ({ data }: { data: Omit<Promotion, 'id'> }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <View style={{ flex: 1, paddingHorizontal: tokens.spacing_s, gap: tokens.spacing_m, paddingTop: tokens.spacing_m }}>
        <View style={{ alignItems: 'center', gap: tokens.spacing_m }}>
          <H style={{ textAlign: 'center' }}>{data.name}</H>
          <H style={{ textAlign: 'center' }} size='s'>
            {data.desc}
          </H>
        </View>

        {data.type === 'IMAGE' ? (
          <ImageAutoHeight
            style={{
              width: '100%',
            }}
            source={data.image?.url || ''}
          />
        ) : null}

        {data.type === 'PDF' ? <Pdf style={{}} src={data.pdf?.url || ''} /> : null}
      </View>
    </Screen>
  )
}
