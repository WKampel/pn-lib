import { Text, View } from 'react-native'
import { styled } from '../libs/wakui'
import Card from './Card'
import Group from './Group'
import Image from './Image'

const PracticeCard = styled('practiceCard', ({ style, variants, name, slogan, children, onPress, logoUrl }) => {
  console.log('styhlecard', style)
  return (
    <Card $interactive={onPress ? true : false} onPress={onPress} {...variants}>
      <Group $x>
        <Image style={{ width: style.logoSize, height: style.logoSize, borderRadius: style.logoBorderRadius }} src={logoUrl} />
        <View>
          <Text>{name}</Text>
          <Text>{slogan}</Text>
          {children}
        </View>
      </Group>
    </Card>
  )
})

export default PracticeCard
