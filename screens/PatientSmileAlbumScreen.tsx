import { ScrollView, View } from 'react-native'
import { SmileAlbum as GqlSmileAlbum } from '../../gql/graphql'
import { H } from '../common/components/H'
import { Image } from '../common/components/Image'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientSmileAlbumScreen = ({ data }: { data: Omit<GqlSmileAlbum, 'id'> }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ gap: tokens.spacing_l, paddingHorizontal: tokens.spacing_s }} style={{ flex: 1 }}>
        <View style={{ gap: tokens.spacing_m }}>
          <H>{data.name}</H>
          <H size='s'>{data.desc}</H>
        </View>

        {data.items?.map((item, i) => (
          <View key={item.id} style={{ flexDirection: 'row' }}>
            <View
              style={{
                aspectRatio: 1,
                flex: 1,
              }}
            >
              <Image
                source={item.beforePhoto?.url || ''}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
            <View
              style={{
                aspectRatio: 1,
                flex: 1,
              }}
            >
              <Image
                source={item.afterPhoto?.url || ''}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  )
}
