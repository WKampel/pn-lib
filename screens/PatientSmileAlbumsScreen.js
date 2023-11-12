import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Group from '../components/Group'
import Screen from '../components/Screen'
import SmileAlbumCard from '../components/SmileAlbumCard'
import useQuery from '../hooks/useQuery'
import GET_ALL_SMILE_ALBUMS from '../queries/GET_ALL_SMILE_ALBUMS'

const SmileAlbumsScreen = ({}) => {
  const { data } = useQuery(GET_ALL_SMILE_ALBUMS)
  const smileAlbums = data?.allSmileAlbums || []

  const nav = useNavigation()

  return (
    <Screen>
      <ScrollView>
        <Group>
          {smileAlbums.map(smileAlbum => (
            <SmileAlbumCard name={smileAlbum.name} desc={smileAlbum.desc} icon={smileAlbum.icon} onPress={() => nav.navigate('ViewSmileAlbum', { id: smileAlbum.id })} />
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default SmileAlbumsScreen
