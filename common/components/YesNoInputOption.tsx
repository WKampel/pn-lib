import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { YesNo } from './YesNoInput'

type YesNoInputOptionProps = {
  type: YesNo
  value: YesNo
  onChange: (value: YesNo) => void
}

export const YesNoInputOption = ({ type, value, onChange }: YesNoInputOptionProps) => {
  return (
    <TouchableOpacity style={{}} onPress={() => onChange(type)}>
      <Text style={{}}>{type === 'YES' ? 'Yes' : 'No'}</Text>
    </TouchableOpacity>
  )
}
