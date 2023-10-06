import { View } from 'react-native'
import { styled } from '../libs/wakui'

const Screen = styled('screen', ({ style, children }) => {
  return <View style={style}>{children}</View>
})

export default Screen
