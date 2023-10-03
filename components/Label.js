import React from 'react'
import { Text } from 'react-native'
import { styled } from '../libs/wakui'

const Label = styled(
  () => ({
    color: 'black',
    marginB: 10,
    size: 'm',
    variants: {
      size: {
        s: {
          fontSize: 14,
        },
        m: {
          fontSize: 18,
        },
        l: {
          fontSize: 22,
        },
      },
    },
  }),
  ({ style, children }) => {
    return <Text style={style}>{children}</Text>
  }
)

export default Label
