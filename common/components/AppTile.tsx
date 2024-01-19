import { ReactElement, cloneElement, isValidElement } from 'react'
import { ColorValue, Text, TouchableOpacity } from 'react-native'
import { NavAction, useNav } from '../hooks/useNav'
import { useTheme } from '../hooks/useTheme'

export const AppTile = ({ title, icon, to }: { icon: ReactElement<{ size: number; color: ColorValue }>; title: string; to?: NavAction }) => {
  const tokens = useTheme()
  const nav = useNav()

  return (
    <TouchableOpacity
      onPress={() => {
        if (to) nav.navigate(...to)
      }}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.color_ui_primary,
        borderRadius: tokens.radius_xs,
        gap: tokens.spacing_s,
        flex: 1,
      }}
    >
      {isValidElement(icon) ? cloneElement(icon, { size: tokens.size_m, color: tokens.color_text_on_primary }) : null}
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
