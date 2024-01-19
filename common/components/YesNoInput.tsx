import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { YesNoInputOption } from './YesNoInputOption'

type YesNoInputProps = {
  label?: string
  value: YesNo
  onChange: (value: YesNo) => void
}

export type YesNo = 'YES' | 'NO'

export const YesNoInput = ({ label, value, onChange }: YesNoInputProps) => {
  const tokens = useTheme()
  return (
    <View>
      {label && <Text style={{}}>{label}</Text>}

      <View
        style={{
          flexDirection: 'row',
          gap: tokens.spacing_s,
        }}
      >
        <YesNoInputOption type='YES' value={value} onChange={onChange} />
        <YesNoInputOption type='NO' value={value} onChange={onChange} />
      </View>
    </View>
  )
}
