import { Text } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const H = ({ children, size = 'm' }: { children: string; size?: 's' | 'm' | 'l' }) => {
  const tokens = useTheme()

  const fontSizeMap = {
    s: tokens.font_size_m,
    m: tokens.font_size_l,
    l: tokens.font_size_xl,
  }
  return <Text style={{ fontWeight: tokens.weight_heavy, fontSize: fontSizeMap[size] }}>{children}</Text>
}
