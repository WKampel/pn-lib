import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import SmileAlbumCard from '../components/SmileAlbumCard'
import useQuery from '../hooks/useQuery'
import GET_ALL_SMILE_ALBUMS from '../queries/GetAllSmileAlbumsQuery'

const SmileAlbumsScreen = ({}) => {
  const { data } = useQuery(GET_ALL_SMILE_ALBUMS)
  const smileAlbums = data?.allSmileAlbums || []

  const nav = useNavigation()

  return (
    <Screen>
      <Card scroll style={{ flexGrow: 1 }}>
        {smileAlbums.map(smileAlbum => (
          <SmileAlbumCard name={smileAlbum.name} desc={smileAlbum.desc} icon={smileAlbum.icon} onPress={() => nav.navigate('SmileAlbum', { id: smileAlbum.id })} />
        ))}
      </Card>
    </Screen>
  )
}

export default SmileAlbumsScreen
