import { View } from 'react-native'
import { styled } from '../libs/wakui'

const Card = styled(
  () => ({
    backgroundColor: '$color.primaryLightTint',
    size: 'l',
    borderWidth: 1,
    borderColor: 'rgb(200,200,200)',
    variants: {
      size: {
        s: {
          gap: 15,
          borderRadius: 10,
          padding: 15,
        },
        m: {
          gap: 30,
          borderRadius: 20,
          padding: 30,
        },
        l: {
          gap: 45,
          borderRadius: 30,
          padding: 45,
        },
      },
    },
  }),
  ({ style, children }) => {
    return <View style={style}>{children}</View>
  }
)

export default Card
