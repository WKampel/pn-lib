import { View } from 'react-native'
import { styled } from '../libs/wakui'
import Group from './Group'

const Card = styled(
  () => ({
    style: {
      backgroundColor: 'white',
    },
    defaultVariants: {
      size: 'm',
      shadow: true,
    },
    variants: {
      width: {
        s: {
          width: 300,
        },
        m: {
          width: 400,
        },
        other: ({ value }) => ({
          width: value,
        }),
      },
      size: {
        s: {
          borderRadius: 5,
          padding: 15,
        },
        m: {
          borderRadius: 10,
          padding: 20,
        },
        l: {
          borderRadius: 15,
          padding: 25,
        },
      },
    },
  }),
  ({ style, children, size }) => {
    return (
      <View style={style}>
        <Group size={size}>{children}</Group>
      </View>
    )
  }
)

export default Card
