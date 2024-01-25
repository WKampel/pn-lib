import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type YesNoInputOptionProps = {
  label: string
  active: boolean
  onPress: () => void
}

export const YesNoInputOption = ({ active, label, onPress }: YesNoInputOptionProps) => {
  const tokens = useTheme()

  const activeContainerStyles = {
    borderWidth: 2,
    borderColor: 'black',
  }

  const activeTextStyles = {
    fontWeight: tokens.weight_heavy,
  }

  return (
    <TouchableOpacity
      style={[
        {
          borderWidth: 1,
          borderColor: tokens.color_border_on_surface,
          borderRadius: tokens.radius_s,
          paddingVertical: tokens.spacing_s,
          paddingHorizontal: tokens.spacing_m,
        },
        active ? activeContainerStyles : {},
      ]}
      onPress={onPress}
    >
      <Text style={active ? activeTextStyles : {}}>{label}</Text>
    </TouchableOpacity>
  )
}
