import { View } from 'react-native'
import { styled } from '../libs/wakui'

const Group = styled(
  () => ({
    x: true,
    variants: {
      x: {
        true: {
          flexDirection: 'row',
        },
      },
      y: {
        true: {
          flexDirection: 'column',
        },
      },
    },
  }),
  ({ style, children }) => {
    return <View style={style}>{children}</View>
  }
)

export default Group
