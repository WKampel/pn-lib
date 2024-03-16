import { ReactElement, cloneElement, isValidElement } from 'react'
import { ColorValue, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const AppTile = ({ title, icon, onPress }: { icon: ReactElement<{ size: number; color: ColorValue }>; title: string; onPress?: () => void }) => {
  const { tokens } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.color_ui_primary,
        borderRadius: tokens.radius_xs,
        gap: tokens.spacing_s,
        flex: 1,
      }}
    >
      {isValidElement(icon) ? cloneElement(icon, { size: tokens.size_s, color: tokens.color_text_on_primary }) : null}
      <Text
        style={{
          color: tokens.color_text_on_primary,
          textAlign: 'center',
          fontWeight: tokens.weight_heavy,
          fontSize: tokens.font_size_s,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
