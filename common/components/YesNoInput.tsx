import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { YesNoInputOption } from './YesNoInputOption'

type YesNoInputProps = {
  label?: string
  value: boolean | null
  onChange: (value: boolean) => void
}

export const YesNoInput = ({ label, value, onChange }: YesNoInputProps) => {
  const tokens = useTheme()
  return (
    <View style={{ gap: tokens.spacing_xs }}>
      {label ? <Text style={{}}>{label}</Text> : null}

      <View
        style={{
          flexDirection: 'row',
          gap: tokens.spacing_s,
        }}
      >
        <YesNoInputOption label='Yes' active={value === true} onPress={() => onChange(true)} />
        <YesNoInputOption label='No' active={value === false} onPress={() => onChange(false)} />
      </View>
    </View>
  )
}
