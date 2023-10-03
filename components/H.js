import React from 'react'
import { Text } from 'react-native'
import { styled } from '../libs/wakui'

const H = styled(
  () => ({
    color: 'black',
    size: 'm',
    variants: {
      size: {
        s: {
          fontSize: 16,
        },
        m: {
          fontSize: 22,
        },
        l: {
          fontSize: 30,
        },
      },
    },
  }),
  ({ style, children }) => {
    return <Text style={style}>{children}</Text>
  }
)

export default H
