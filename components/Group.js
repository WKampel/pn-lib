import { View } from 'react-native'
import { styled } from '../libs/wakui'

const Group = styled(
  () => ({
    defaultVariants: {
      space: 'm',
    },
    variants: {
      x: {
        true: {
          flexDirection: 'row',
        },
      },
      space: {
        s: {
          gap: 10,
        },
        m: {
          gap: 15,
        },
        l: {
          gap: 20,
        },
      },
      screen: {
        true: {
          padding: 15,
        },
      },
      flex: {
        other: ({ value }) => ({
          flex: value,
        }),
      },
      alignItems: {
        other: ({ value }) => ({
          alignItems: value,
        }),
      },
      justifyContent: {
        other: ({ value }) => ({
          justifyContent: value,
        }),
      },
    },
  }),
  ({ style, children }) => {
    return <View style={style}>{children}</View>
  }
)

export default Group
