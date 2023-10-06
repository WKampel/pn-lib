import React from 'react'
import { Text } from 'react-native'
import { styled } from '../libs/wakui'

const H = styled('h', ({ style, children }) => {
  return <Text style={style}>{children}</Text>
})

export default H
