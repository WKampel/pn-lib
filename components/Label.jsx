import React from 'react'
import { Text } from 'react-native'
import { styled } from '../libs/wakui'

const Label = styled('label', ({ style, children }) => {
  return <Text style={style}>{children}</Text>
})

export default Label
