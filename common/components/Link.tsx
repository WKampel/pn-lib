import React, { ReactNode } from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type LinkProps = {
  children: ReactNode
  onPress: () => void
  textStyle?: StyleProp<TextStyle>
  inheritFontSize?: boolean
}

export const Link = ({ textStyle = {}, children, onPress }: LinkProps, inheritFontSize = false) => {
  const { tokens } = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          {
            color: tokens.color_ui_primary,
            fontSize: inheritFontSize ? undefined : tokens.font_size_m,
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
