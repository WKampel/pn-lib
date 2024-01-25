import React, { ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type LinkProps = {
  children: ReactNode
  onPress: () => void
}

export const Link = ({ children, onPress }: LinkProps) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          color: tokens.color_ui_primary,
          fontSize: tokens.font_size_m,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
