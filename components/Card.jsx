import { Pressable } from 'react-native'
import { styled } from '../libs/wakui'
import Group from './Group'

const Card = styled('card', ({ style, children, onPress, onPressIn, onPressOut, onMouseEnter, onMouseLeave }) => {
  return (
    <Pressable
      tabIndex={onPress ? 0 : -1}
      focusable={onPress ? true : false}
      onPress={onPress}
      style={style}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Group>{children}</Group>
    </Pressable>
  )
})

export default Card
