import { ScrollView } from 'react-native'
import { GetAllSmileAlbumsQuery, GetAllSmileAlbumsQueryVariables } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { SmileAlbum } from '../common/components/SmileAlbum'
import { useNav } from '../common/hooks/useNav'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { GetAllSmileAlbums } from '../queries/GetAllSmileAlbumsQuery'

export const PatientSmileAlbumsScreen = ({}) => {
  const { data } = usePracticeQuery<GetAllSmileAlbumsQuery, GetAllSmileAlbumsQueryVariables>(GetAllSmileAlbums, { variables: {} })
  const smileAlbums = data?.allSmileAlbums || []

  const nav = useNav()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        {smileAlbums.map(smileAlbum => (
          <SmileAlbum name={smileAlbum.name} onPress={() => nav.navigate('SmileAlbum', { id: smileAlbum.id })} />
        ))}
      </ScrollView>
    </Screen>
  )
}
