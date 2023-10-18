import { View } from 'react-native'
import { styled } from '../libs/wakui'
import Card from './Card'
import Group from './Group'
import H from './H'
import Icon from './Icon'

const ServiceCard = styled('serviceCard', ({ style, variants, icon, name, desc, onPress }) => {
  return (
    <Card $interactive={onPress ? true : false} onPress={onPress} {...variants}>
      <Group $x>
        <Icon val={icon} size={style.iconSize} />
        <View>
          <H>{name}</H>
        </View>
      </Group>
    </Card>
  )
})

export default ServiceCard
