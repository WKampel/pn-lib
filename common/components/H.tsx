import { ReactNode } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const H = ({ children, size = 'm', style }: { style?: StyleProp<TextStyle>; children: ReactNode; size?: 's' | 'm' | 'l' | 'xl' }) => {
  const { tokens } = useTheme()

  const fontSizeMap = {
    s: tokens.font_size_m,
    m: tokens.font_size_l,
    l: tokens.font_size_xl,
    xl: tokens.font_size_xxl,
  }

  const opacityMap = {
    s: 0.7,
    m: 0.8,
    l: 0.9,
    xl: 1,
  }

  return <Text style={[{ opacity: opacityMap[size], fontWeight: tokens.weight_heavy, fontSize: fontSizeMap[size] }, style]}>{children}</Text>
}
