import { gql } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Group from '../components/Group'
import Screen from '../components/Screen'
import SmileAlbumCard from '../components/SmileAlbumCard'
import useQuery from '../hooks/useQuery'

const GET_SMILEALBUMS = gql`
  query {
    allSmileAlbums {
      id
      name
      desc
    }
  }
`

const SmileAlbumsScreen = ({}) => {
  const { data } = useQuery(GET_SMILEALBUMS)
  const smileAlbums = data?.allSmileAlbums || []

  const nav = useNavigation()

  return (
    <Screen>
      <ScrollView>
        <Group>
          {smileAlbums.map(smileAlbum => (
            <SmileAlbumCard
              name={smileAlbum.name}
              desc={smileAlbum.desc}
              icon={smileAlbum.icon}
              onPress={() => nav.navigate('View Smile Album', { id: smileAlbum.id })}
            />
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default SmileAlbumsScreen
