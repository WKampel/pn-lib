import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styled } from '../libs/wakui'
import Label from './Label'

const YesNoInput = styled('yesNoInput', ({ style, label, value, onChange }) => {
  return (
    <View style={style}>
      {label && <Label>{label}</Label>}

      <View style={style.buttonContainerStyle}>
        <Pressable style={[style.optionStyle, value === 'yes' && style.selectedOptionStyle]} onPress={() => onChange && onChange('yes')}>
          <Text style={style.optionText}>Yes</Text>
        </Pressable>
        <Pressable style={[style.optionStyle, value === 'no' && style.selectedOptionStyle]} onPress={() => onChange && onChange('no')}>
          <Text style={style.optionText}>No</Text>
        </Pressable>
      </View>
    </View>
  )
})

export default YesNoInput
