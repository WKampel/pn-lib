import { ScrollView } from 'react-native'
import { GetAllSmileAlbumsQuery, GetAllSmileAlbumsQueryVariables } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { SmileAlbum } from '../common/components/SmileAlbum'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { GetAllSmileAlbums } from '../queries/GetAllSmileAlbumsQuery'

export const PatientSmileAlbumsScreen = ({ onPressSmileAlbum }: { onPressSmileAlbum?: (smileAlbumId: string) => void }) => {
  const { data } = usePracticeQuery<GetAllSmileAlbumsQuery, GetAllSmileAlbumsQueryVariables>(GetAllSmileAlbums, { variables: {} })
  const smileAlbums = data?.allSmileAlbums || []

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        {smileAlbums.map(smileAlbum => (
          <SmileAlbum name={smileAlbum.name} onPress={() => onPressSmileAlbum?.(smileAlbum.id)} />
        ))}
      </ScrollView>
    </Screen>
  )
}
