import React, { ReactNode } from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type LinkProps = {
  children: ReactNode
  onPress: () => void
  textStyle?: StyleProp<TextStyle>
}

export const Link = ({ textStyle = {}, children, onPress }: LinkProps) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          {
            color: tokens.color_ui_primary,
            fontSize: tokens.font_size_m,
            textDecorationLine: 'underline',
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
