import { View } from 'react-native'
import { styled } from '../libs/wakui'

const Group = styled('group', ({ style, children }) => {
  return <View style={style}>{children}</View>
})

export default Group
