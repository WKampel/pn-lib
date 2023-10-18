import React from 'react'
import { Switch as ReactNativeSwitch, View } from 'react-native'
import { styled } from '../libs/wakui'
import Label from './Label'

const Switch = styled('switch', ({ style, label, onChange, value }) => {
  return (
    <View style={style}>
      <ReactNativeSwitch onValueChange={onChange} value={value} />
      <Label>{label}</Label>
    </View>
  )
})

export default Switch
