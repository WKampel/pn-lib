import { ScrollView, Text, View } from 'react-native'
import { SmileAlbum as GqlSmileAlbum } from '../../gql/graphql'
import { Image } from '../common/components/Image'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientSmileAlbumScreen = ({ data }: { data: Omit<GqlSmileAlbum, 'id'> }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1, gap: tokens.spacing_l }}>
        <Text>{data.name}</Text>
        <Text>{data.desc}</Text>

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
