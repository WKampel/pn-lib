import { Feather } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { styled } from '../libs/wakui'
import Card from './Card'
import Group from './Group'

const SmileAlbumCard = styled('smileAlbumCard', ({ variants, name, desc, onPress }) => {
  return (
    <Card $interactive={onPress ? true : false} onPress={onPress} {...variants}>
      <Group $x>
        <Feather name='image' size={75} color={'black'} />
        <View>
          <Text>{name}</Text>
          <Text>{desc}</Text>
        </View>
      </Group>
    </Card>
  )
})

export default SmileAlbumCard
